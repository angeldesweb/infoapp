import React from 'react';
import LoginContainer from './LoginContainer';
import './Login.css'

const Login = ({history}) => {
    return(
        <LoginContainer className='Login' history={history} />
    )
}

export default Login;