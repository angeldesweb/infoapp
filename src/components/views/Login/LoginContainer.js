import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from '../../../apollo/mutations/usuarios'
import LoginComponent from './LoginComponent';

const LoginContainer = ({history}) => {
    console.log(history)
    const [SignIn,{data,loading,error}] = useMutation(SIGN_IN)
    const handleSubmit = async (args) => {
        await submitForm(args)
    }
    const submitForm = async (args) => {
        SignIn({
            variables:args
        })
    }
    if(data){
        const {usuario,token,error} = data.SignIn
        if(usuario){
            localStorage.setItem('usuario',usuario._id)
        }
        if(token){
            localStorage.setItem('token',token);
        }
        if(error) console.log(error);
        if(token && usuario){
            setTimeout(() => {
                history.push('/')
            },400)
        } 
    }
    return(    
        <LoginComponent 
            handleSubmit={handleSubmit}
            errors={error}
            loading={loading}
        />
    )
}

export default LoginContainer;