import React , { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import MainRoutes from '../../routes/MainRoutes';
import MainAsideBox from './MainAsideBox/index.jsx';
import MainHeader from './MainHeader';
import ModalForm from './MainTools/ModalForm'


const Main = (props)=>{
    const { history , match , usuario } = props
    const [show,setShow] = useState({open:false})
    const [activeForm,setActiveForm] = useState(null)
    const handleShow = (e,formName)=>{
        setActiveForm(formName)
        setShow({open:!show.open})
    }
    return(
        <div>   
           <MainAsideBox history={history} match={match}/>
            <Grid columns='equal'>
                <Grid.Column></Grid.Column>
                <Grid.Column width='10'>
                    <MainHeader usuario={usuario} history={history}/>
                    <MainRoutes show={show} setShow={handleShow}/>
                </Grid.Column>
                <Grid.Column></Grid.Column>
            </Grid>
            <ModalForm show={show} setShow={handleShow} form={activeForm}/> 
        </div>

    )
}

export default Main;