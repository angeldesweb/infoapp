import React from 'react';
import { Segment } from 'semantic-ui-react';
import FormBox from './FormBox';

const Crear = (props)=> {
    const { setShow } = props
    return(
        <Segment raised>
            <FormBox setShow={setShow}/>
        </Segment>
    )
}

export default Crear