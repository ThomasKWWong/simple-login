import React, { useState } from 'react';
import { SButton, SForm, SFormControl, SFormTitle, SInput, SLabel, SDivR } from './styles'

const Registration = () => {
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
        if(data.status === 'ok') {
            alert("Successful Registration");
            window.location.href="/login";
        }
    }

    return (
        <SDivR>
            <SForm onSubmit={registerUser}>
                <SFormTitle>Register</SFormTitle> <br/>
                <SFormControl>
                    <SLabel>Username</SLabel> <br/>
                    <SInput value= {username} onChange={(e) => setUsername(e.target.value)} placeholder="Type your username"/><br/>
                    <SLabel>Email</SLabel> <br/>
                    <SInput value= {email} onChange={(e) => setEmail(e.target.value)} placeholder="Type your email"/><br/>
                    <SLabel>Password</SLabel><br/>
                    <SInput value= {password} onChange={(e) => setPassword(e.target.value)} placeholder='Type your password'/><br/>
                </SFormControl>
                <SButton type = "submit">Register</SButton>
            </SForm>
        </SDivR>
    )
}

export default Registration;