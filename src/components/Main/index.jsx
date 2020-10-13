import React , { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USUARIO } from '../../apollo/queries/usuarios';
import MainRoutes from '../../routes/MainRoutes';
import MainAsideBox from './MainAsideBox/index.jsx';
import MainHeader from './MainHeader';
import ModalForm from './MainTools/ModalForm'


const Main = (props)=>{
    const { history , match  } = props
    const [show,setShow] = useState({open:false})
    const [activeForm,setActiveForm] = useState(null)
    const usuario = localStorage.getItem('usuario');
    const {error,loading,data} = useQuery(GET_USUARIO,{
        variables: {_id:usuario}
    });
    if(error) return <h1>Se han encontrado errores</h1>
    if(loading) return <h1>Loading...</h1>
    const datos = data.getUsuarioById.usuario;
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
                    <MainHeader usuario={datos} history={history}/>
                    <MainRoutes show={show} setShow={handleShow}/>
                </Grid.Column>
                <Grid.Column></Grid.Column>
            </Grid>
            <ModalForm show={show} setShow={handleShow} form={activeForm}/> 
        </div>

    )
}

export default Main;