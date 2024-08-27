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

        setErrors(newErrors)
    }

    return (
    <form onSubmit={handleSubmit}>
        <div>
            <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
        />
            {errors.username && <span>{errors.username}</span>}
        </div>
        
        <div>
            <input 
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='Email'
        />
            {errors.email && <span>{errors.email}</span>}
        </div>
        
        <div>
            <input 
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
        />
            {errors.password && <span>{errors.password}</span>}
        </div>
        <button type='submit'>Submit</button>
    </form>
    )
}

export default RegistrationForm