import React from 'react';
import { Redirect } from 'react-router-dom';
import Main from '../components/Main/index.jsx'


const MainContainer = ({history,match})=>{
    const token = localStorage.getItem('x-token');
    
    if(!token) return <Redirect to='/login' />
    
    return <Main history={history} match={match} />

}

export default MainContainer