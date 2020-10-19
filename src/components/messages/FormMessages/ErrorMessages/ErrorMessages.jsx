import React from 'react';
import { Message } from 'semantic-ui-react';

const ErrorMessages = ({errors,error}) => {
    if(!errors.message){
        return ( 
            <Message negative>
                Hay problemas de comunicación con el servidor
            </Message>
        )
    }
    return (
        <Message negative>
            {errors.message}
        </Message>        
    )   
}

export default ErrorMessages;