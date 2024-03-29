import React from 'react'
import MuInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MuInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder='Поиск'
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='Сортировка'
        options={[
          { value: 'title', name: 'по названию' },
          { value: 'body', name: 'по описанию' }
        ]}
      />
    </div>
  )
}

export default PostFilter