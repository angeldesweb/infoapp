import React , { useState } from 'react';
import moment from 'moment';
import _ from 'lodash'
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_FICHA_BY_ID } from '../../../../apollo/queries/fichas';
import { ErrorContainer } from '../../../views/ErrorHandler';
import InicioComponent from './InicioComponent'

const InicioContainer = ({ fichas , render , setRender }) => {
//---QUERIE Y STATE DE LA FICHA A VISUALIZAR
    const [value,fetchFicha] = useState(null)
    const [getFichaById,{error,loading}] = useLazyQuery(GET_FICHA_BY_ID,{variables:{_id:value}})
//---DEVOLVIENDO SOLO LAS FICHAS REALIZADAS DEL DIA
    const fichasArr = _.filter(fichas,(ficha)=>{
        return moment(Date.now()).format('dddd') === moment(parseInt(ficha.createdAt)).format('dddd')
    })
//---CREANDO LA PETICION
    if(value !== null){
        getFichaById()
    }
//---TRACKING FICHA
    const setFicha = (e) => {
        const fichaId = e.target.value;
        fetchFicha(fichaId);
    }
//---RESPUESTA DE ERROR
    if(error) return <ErrorContainer />
//---HANDLING DATA
    if(getFichaById.ficha){
        console.log(getFichaById.ficha)
        const { ficha , error , success } = getFichaById;
        if(error || !success) return <h1>Se han encontrado errores en la aplicación</h1>
        return(
           <InicioComponent fichas={fichasArr} ficha={ficha} setFicha={setFicha} render={render} setRender={setRender}/> 
        )
    }
//---DEFAULT
    return (
        <InicioContainer fichas={fichasArr}  setFicha={setFicha} render={render} setRender={setRender} />
    )
}

export default InicioContainer