import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';
import { GET_USUARIO } from '../apollo/queries/usuarios';
import Main from '../components/Main/index.jsx'


const MainContainer = ({history,match})=>{
    const token = localStorage.getItem('x-token');
    const usuario = localStorage.getItem('usuario');
    const {error,loading,data} = useQuery(GET_USUARIO,{
        variables: {_id:usuario}
    });
    if(error) return <h1>Se han encontrado errores</h1>
    if(loading) return <h1>Loading...</h1>
    if(data) return (<Main history={history} match={match} usuario={data.getUsuarioById.usuario}/>)
    

    if(!token) return <Redirect to='/login' />

    return (
        <h1>Loading...</h1>
    )
}

export default MainContainer