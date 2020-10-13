import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import LoginFormBox from './LoginFormBox';
import LoginHeader from './LoginHeader';
import './index.css';

const Main = ({history})=>{
    return (
        <div className='padded'>
            <LoginHeader />
            <Grid columns='equal'>
                <Grid.Column></Grid.Column>
                <Grid.Column width={8}>
                    <Segment raised>
                        <LoginFormBox history={history}/>
                    </Segment>
                </Grid.Column>
                <Grid.Column></Grid.Column>
            </Grid>
        </div>
    )
}

export default Main