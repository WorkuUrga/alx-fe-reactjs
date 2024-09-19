import React from 'react'
import { useState } from 'react'

function UserSearch() {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) =>
  e.preventDefault()
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        placeholder='Search Github Users...'
        />
        <button>Search</button>
    </form>
  )
}

export default UserSearch