import React from 'react';
import { Grid , Segment } from 'semantic-ui-react';
import { LoginHeader } from '../headers/Login';
import { LoginForm } from '../../forms/Usuario'

const LoginComponent = ({ handleSubmit , loading , error}) => {
    return(
        <div className='Login'>
            <Grid centered >
                <Grid.Row>
                    <Grid.Column>
                        <LoginHeader />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column width='6'>
                    <Segment raised>
                    <LoginForm handleLogin={handleSubmit} loading={loading} error={error}/>
                    </Segment>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default LoginComponent;