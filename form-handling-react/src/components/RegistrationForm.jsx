import React from 'react'
import {useState} from 'react'

function RegistrationForm() {
    [username, setUsername] = useState('');
    [email, setEmail] = useState('');
    [password, setPassword] = useState('');

    const handleUsernameChange = (e)=> {
        setUsername(e.target.value);
    }
    const handleEmailChange =(e)=> {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e)=> {
        setPassword(e.target.value);
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        
        if(!username || !email || !password) {
            alert('Please fill in all fields')
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
        />
        <input 
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='Email'
        />
        <input 
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
        />
        <button type='submit'>Submit</button>
    </form>
    )
}

export default RegistrationForm