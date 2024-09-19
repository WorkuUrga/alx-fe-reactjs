
import { useState } from 'react'
import fetchUserData from '../services/githubService'

function Search() {
  const [search, setSearch] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async(e) =>{
  e.preventDefault();


  setLoading(true);
  setError('');
  setUser(null);

  const {user, error} = await fetchUserData(search)
    setUser(user)
    setError(error)
    setLoading(false)
  };
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
        <img src={user.avatar_url} alt={user.login} width="150" />
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