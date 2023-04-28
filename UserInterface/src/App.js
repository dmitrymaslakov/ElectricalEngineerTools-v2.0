import React, { useMemo, useState } from 'react'
import PostItem from './components/PostItem'
import MySelect from './components/UI/select/MySelect'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MuInput from './components/UI/input/MyInput'
import './styles/App.css'

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'c', body: 'э' },
    { id: 2, title: 'b', body: 'ю' },
    { id: 3, title: 'a', body: 'я' },
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    console.log('Dima')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MuInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Поиск'
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            { value: 'title', name: 'по названию' },
            { value: 'body', name: 'по описанию' }
          ]}
        />
      </div>
      {sortedAndSearchedPosts.length
        ?
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты для JS' />
        :
        <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      }
    </div>
  )
}

export default App
