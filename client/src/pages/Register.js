import React, { useState } from 'react';
// import "./App.css";

function App() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(event) {
        event.preventDefault();
        const response = await fetch("/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        })

        const data = await response.json();
        
        //send to login page with successful registration
        
    }

    return (
        <div>
            <h1>Register</h1>
            <br/>
            <form onSubmit={registerUser}>
                <input value = {username} onChange={(e) => setUsername(e.target.value)} type = "text" placeholder="Username"/> <br/>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type = "text" placeholder="Email"/><br/>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type = "text" placeholder="Password"/> <br/>
                <input type = "submit" value = "Register" />
            </form>
        </div>
    )
}

export default App