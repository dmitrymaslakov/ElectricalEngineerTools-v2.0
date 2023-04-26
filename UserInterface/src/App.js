import React, { useState } from 'react'
import PostItem from './components/PostItem'
import MySelect from './components/UI/select/MySelect.jsx'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import './styles/App.css'

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'c', body: 'э' },
    { id: 2, title: 'b', body: 'ю' },
    { id: 3, title: 'a', body: 'я' },
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPost}
          defaultValue='Сортировка'
          options={[
            { value: 'title', name: 'по названию' },
            { value: 'body', name: 'по описанию' }
          ]}
        />
      </div>
      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title='Посты для JS' />
        :
        <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      }
    </div>
  )
}

export default App
