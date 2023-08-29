import React, { useState } from 'react';
import { SButton, SForm, SFormControl, SFormTitle, SInput, SLabel, SDiv } from './styles'

const Login = () => {
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

    return(
    <SDiv>
        <SForm onSubmit={loginUser}>
            <SFormTitle>Login</SFormTitle> <br/>
            <SFormControl>
                <SLabel>Email/Username</SLabel> <br/>
                <SInput value= {email} onChange={(e) => setEmail(e.target.value)} placeholder="Type your email/username"/><br/>
                <SLabel>Password</SLabel><br/>
                <SInput value= {password} onChange={(e) => setPassword(e.target.value)} placeholder='Type your password'/><br/>
            </SFormControl>
            <SButton type = "submit">Login</SButton>
        </SForm>
    </SDiv>
    )
};

export default Login;