import React from 'react';
import { SButton, SForm, SFormControl, SFormTitle, SInput, SLabel } from './styles'

const Login = () => {
    return(
    <SForm>
        <SFormTitle>Login</SFormTitle> <br/>
        <SFormControl>
            <SLabel>Email/Username</SLabel> <br/>
            <SInput placeholder="Type your email/username"/><br/>
            <SLabel>Password</SLabel><br/>
            <SInput placeholder='Type your password'/><br/>
        </SFormControl>
        <SButton>Login</SButton>
    </SForm>
    )
};

export default Login;