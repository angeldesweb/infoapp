import React from 'react';
import { Grid } from 'semantic-ui-react';
import { LayoutHeader } from '../headers/LayoutHeader';
import { DefaultAsideContainer } from '../../asides/DefaultAside';
import { ModalFormClasificacion } from '../../modals/ModalFormClasificacion';
import './Home.css'
import HomeRoutes from '../../../routes/HomeRoutes';


const HomeComponent = ({ history , match , usuario , clasificaciones , show , setShow , fichas , render , setRender }) =>{
    return (
        <div className='Main'>
            <DefaultAsideContainer history={history} match={match}/>
            <Grid columns='equal'  centered>
                <Grid.Column width='10'>
                    <LayoutHeader usuario={usuario} history={history}/>
                    <HomeRoutes setShow={setShow} clasificaciones={clasificaciones} fichas={fichas} render={render} setRender={setRender} />
                </Grid.Column>
            </Grid>
            <ModalFormClasificacion show={show} setShow={setShow} />
        </div>
    )
}



export default HomeComponent