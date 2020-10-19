import React from 'react';
import { Message } from 'semantic-ui-react'

const NoFichaMessage = () => {
    return(
        <Message positive>
            <Message.Header>No tienes Fichas cargadas el día de hoy</Message.Header>
            <Message.Content>
                Ingresa en el pánel de la izquierda sección crear para cargar 
                fichas hoy ó a la sección búsquedas para encontrar alguna ficha anterior
            </Message.Content>
        </Message>
    )
}

export default NoFichaMessage