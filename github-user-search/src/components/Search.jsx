
import { useState } from 'react'
import axios from 'axios'

function Search() {
  const [search, setSearch] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async(e) =>{
  e.preventDefault();

  if(!search.trim()) {
    return;
  }
  setLoading(true);
  setError('');
  setUser(null);
  
  try {
    const response = await axios.get(`https://api.github.com/users/${search}`)
    setUser(response.data);
  }
  catch(err) {
    setError("Looks like we cant find the user")
  }
  finally {
    setLoading(false)
  }
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input 
        className='input'
        type="text" 
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        placeholder='Search Github Users...'
        />
        <button type="submit">Search</button>
    </form>
    
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {user && (
      <div>
        <img src={user.avatar_url} alt={user.name} width="150" />
        <h2>{user.name || 'No name provided'}</h2>
        <p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">Visit GitHub Profile</a>
        </p>
      </div>
    )}
    </div>
  )
}

export default Search