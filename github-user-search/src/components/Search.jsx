import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

function Search() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setUser(null);

    try {
    const queryParams = {
      username: search,
      location: location,
      repos: `>${minRepos}`
    }
    const { user, error } = await fetchUserData(queryParams);
    setUser(user);
    setError(error);
    setLoading(false);
    }
    catch(err) {
      setError("Looks like we cant find the user")
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='mr-auto ml-auto mb-4 bg-white w-1/2 p-4'>
        <input
        className=' mt-8 mr-auto ml-auto mb-4 block h-8 w-2/3 border border-gray-400'
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search GitHub Users..."
        />
        <input 
        className='block mr-auto ml-auto h-8 w-2/3 border border-gray-400'
        type='text'
        value = {location}
        onChange={(e)=>setLocation(e.target.value)}
        placeholder='Enter the location'
        />
        <input 
        className='mt-2 block mr-auto ml-auto h-8 w-2/3 border border-gray-400'
        type='number'
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        placeholder='Repo Count'
        />
        <button type="submit" className='block mr-auto ml-auto mt-4 mb-4 bg-blue-300 py-1 px-3 hover:bg-blue-400 active:opacity-95'>Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && user.length > 0 && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="150" 
          className='mr-auto ml-auto'/>
          <h2 className=''>{user.name || 'No name provided'}</h2>
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer"
            className='text-blue-500 hover:text-red-300'>
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
      {user && user.length === 0 && <p>No users found matching the criteria</p>}
    </div>
  );
}

export default Search;
