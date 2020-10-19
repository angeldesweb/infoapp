import React from 'react';
import { Grid , Header , Button, Segment } from 'semantic-ui-react';
import moment from 'moment';

moment.locale('es')

const LayoutHeader = ({ usuario , history }) => {
    return(
        <Segment raised>
            <Grid columns={3} verticalAlign='middle' textAlign='center' >
                <Grid.Column>
                    <Header color='blue' as='h2'>Usuario</Header>
                    <Header as='h2'>{usuario.nombre}</Header>
                </Grid.Column>
                <Grid.Column>
                    <Header color='blue' as='h2'>Última conexión</Header>
                    <Header as='h2'>{moment().format('D MMM YYYY')}</Header>
                </Grid.Column>
                <Grid.Column>
                    <Button basic color='blue' compact onClick={e =>{localStorage.clear(); history.push('/login')}} >Finalizar Sesión</Button>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default LayoutHeader;