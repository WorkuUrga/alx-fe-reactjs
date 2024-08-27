import React from 'react'
import {useState} from 'react'

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const[errors, setErrors] =useState({})

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
        const newErrors ={}
        
        if(!username) newErrors.username = 'username is required'
        if(!email) newErrors.email = 'Email is required';
        if(!password) newErrors.password = 'Password is required'
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