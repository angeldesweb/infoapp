import React from 'react';
import { Segment } from 'semantic-ui-react';
import Inicio from '../../components/MainRoutes/Inicio';

const InicioContainer = (props)=>{
    return(
        <Segment>
            <Inicio usuario={props.usuario} />
        </Segment>
    )
}

export default InicioContainer;