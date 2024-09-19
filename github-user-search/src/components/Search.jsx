import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

function Search() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setUser(null);

    try {
    const { user, error } = await fetchUserData(search);
    setUser(user);
    setError(error);
    setLoading(false);
    }
    catch {
      setError("Looks like we cant find the user")
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search GitHub Users..."
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
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;
