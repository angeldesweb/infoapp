import React from 'react';
import { Route } from 'react-router-dom';
//import BuscarContainer from '../containers/MainContainers/Buscar';
//import CrearContainer from '../containers/MainContainers/Crear';
import Inicio from '../components/pages/Home/Inicio';
//import Destacado from '../components/MainComponents/Destacado';

const Nuevo = () => <h1>Nuevo</h1>

const Buscar = () => <h1>Buscar</h1>

const Charts = () => <h1>Charts</h1>

export default (props)=>{
    const { fichas , setShow , setRender , render} = props
    return(
        <div>
            <Route path='/nuevo'  render={(props)=>(<Nuevo {...props} setShow={setShow} />)} />
            <Route path='/buscar' render={(props)=>(<Buscar {...props}  />)} />
            <Route path='/monitor' render={(props)=>(<Charts {...props}  />)} />
            <Route exact path='/' render={(props)=><Inicio {...props} fichas={fichas} render={render} setRender={setRender}/>} />
        </div>
    )
}