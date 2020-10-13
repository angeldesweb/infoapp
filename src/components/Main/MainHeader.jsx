import React from 'react';
import { Header, Segment , Grid, Button } from 'semantic-ui-react';
import moment from 'moment'
moment.locale('es')

const MainHeader = (props)=>{
    const { usuario , history } = props;
    return(
        <Segment raised>
            <Grid columns={3} verticalAlign='middle' textAlign='center' >
                <Grid.Column>
                    <Header color='blue' as='h2'>Usuario</Header>
                    <p>{usuario.nombre}</p>
                </Grid.Column>
                <Grid.Column>
                    <Header color='blue' as='h2'>Última conexión</Header>
                    <p>{moment().format('D MMM YYYY')}</p>
                </Grid.Column>
                <Grid.Column>
                    <Button basic color='blue' compact onClick={e =>{localStorage.clear(); history.push('/login')}} >Finalizar Sesión</Button>
                </Grid.Column>
            </Grid>
            
        </Segment>
    )
}

export default MainHeader;