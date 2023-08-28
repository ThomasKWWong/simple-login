import React, { useState } from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../App.css";

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
        if(data.user){
            sessionStorage.setItem('token', data.user);
            window.location.href = '/welcome';
        }
    }

    return (
        <div>
            <Header/>
            <h1>Login</h1>
            <br/>
            <form onSubmit={loginUser}>
                {/* <input value = {username} onChange={(e) => setUsername(e.target.value)} type = "text" placeholder="Username"/> <br/> */}
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type = "text" placeholder="Email"/><br/>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type = "text" placeholder="Password"/> <br/>
                <input type = "submit" value = "Login" />
            </form>
            <Footer/>
        </div>
    )
}

export default App