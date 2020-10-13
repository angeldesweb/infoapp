import React from 'react';
import { Header , Segment , Image } from 'semantic-ui-react';

const LoginHeader = ()=>{
    return(
        <Segment raised>
            <Image src='./images/Logo.png' alt='Logo Consejo Nacional Electoral' size='medium' centered/>
            <Header as='h1' textAlign='center'>Notas Informativas</Header>
        </Segment>
    )
}

export default LoginHeader;