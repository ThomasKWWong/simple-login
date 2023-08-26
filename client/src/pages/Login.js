import React, { useState } from 'react';
// import "./App.css";

function App() {
    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(event) {
        event.preventDefault();
        const response = await fetch("/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json();
        
        //add some condition with successful login
    }

    return (
        <div>
            <h1>Login</h1>
            <br/>
            <form onSubmit={loginUser}>
                {/* <input value = {username} onChange={(e) => setUsername(e.target.value)} type = "text" placeholder="Username"/> <br/> */}
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type = "text" placeholder="Email"/><br/>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type = "text" placeholder="Password"/> <br/>
                <input type = "submit" value = "Login" />
            </form>
        </div>
    )
}

export default App