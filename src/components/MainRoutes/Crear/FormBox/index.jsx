import React from 'react';
import { Header } from 'semantic-ui-react';
import CrearForm from './CrearForm';

const FormBox = ({setShow})=>{
    return(
        <div>
            <Header color='blue' as='h3'>Registro de nueva ficha</Header>
            <CrearForm setShow={setShow} />
        </div>
    )
}

export default FormBox