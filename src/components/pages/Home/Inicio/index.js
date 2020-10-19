import React from 'react';
import InicioContainer from './InicioContainer';

const Inicio = ({ fichas , setShow , show }) => {
    return(
        <InicioContainer fichas={fichas} setShow={setShow} show={show} />
    )
}

export default Inicio;
