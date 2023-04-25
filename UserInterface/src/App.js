import React, { useState } from 'react'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import './styles/App.css'

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      {
        posts.length
          ?
          <PostList remove={removePost} posts={posts} title='Посты для JS' />
          :
          <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      }
    </div>
  )
}

export default App
