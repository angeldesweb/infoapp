import React from 'react';
import { Route } from 'react-router-dom';
import BuscarContainer from '../container/MainContainers/Buscar';
import CrearContainer from '../container/MainContainers/Crear';
import InicioContainer from '../container/MainContainers/Inicio';

export default (props)=>{
    const {setShow,show,usuario} = props
    return(<div>
        <Route path='/nuevo'  render={(props)=>(<CrearContainer  {...props} setShow={setShow} show={show} usuario={usuario}/>)} />
        <Route path='/buscar' render={(props)=>(<BuscarContainer {...props} setShow={setShow} show={show} usuario={usuario}/>)} />
        <Route exact path='/' render={(props)=><InicioContainer {...props} setShow={setShow} show={show} usuario={usuario}/>} />
    </div>)
}
