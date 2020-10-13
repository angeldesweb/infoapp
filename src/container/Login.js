import React from 'react'
import { Redirect } from 'react-router-dom'
import Login from '../components/Login/index.jsx'



const LoginContainer = ({history})=>{
    const token = localStorage.getItem('x-token');

    if(token) console.log(token)
    if(token) return <Redirect to='/' />

    return (
        <Login history={history}/>
    )
}

export default LoginContainer