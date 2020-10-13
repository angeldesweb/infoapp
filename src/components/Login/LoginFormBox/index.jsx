import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { fields , initialValues } from './loginFields';
import { SIGN_IN } from '../../../apollo/mutations/usuarios';
import DinamicForm from '../../Tools/Forms/DinamicForm';

const LoginFormBox =({history})=>{

    const [signIn,{loading,data} ] = useMutation(SIGN_IN);
    console.log(SIGN_IN)
    if(data){
        console.log(data)
        const {token,usuario} = data.signIn;
        localStorage.setItem('usuario',usuario._id)
        localStorage.setItem('x-token',token);
        history.push('/')
    }
    const handleSubmit = async (args)=>{
        await handleSign(args)
    }
    const handleSign = (args)=>{
        signIn({variables:args})
    }
    return(
        <DinamicForm  
            fields={fields} 
            initialValues={initialValues} 
            btnName='Registrar'
            handleSubmit={handleSubmit}
            loading={loading}
        />
    )
}

export default LoginFormBox