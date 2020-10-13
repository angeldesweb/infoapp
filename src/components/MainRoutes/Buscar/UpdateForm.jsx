import React, { Fragment, useState } from 'react'
import _ from 'lodash'
import { Form, TextArea , Button , Segment , Dropdown , Input , Message } from 'semantic-ui-react';
import useFields from '../../Hooks/useFields';
import ResponsiveButton from '../../Tools/Forms/ResponsiveButton';
import { useQuery , useMutation } from '@apollo/react-hooks';
import { ALL_CLASIFICACIONES } from '../../../apollo/queries/clasificaciones'
import { UPDATE_FICHA } from '../../../apollo/mutations/fichas';

const UpdateForm = ({setShow,ficha})=>{
    if(!ficha) return <h1>Loading...</h1>

    return <FormBox setShow={setShow} ficha={ficha} />
}

const FormBox = ({setShow,ficha})=>{

    const [clasif,setClasificacion] = useState(null);
    const {data:allClasificaciones,loading:LoadingClasif} = useQuery(ALL_CLASIFICACIONES);
    const [updateFicha,{data}] = useMutation(UPDATE_FICHA);
    const initialValues = {        
        titulo:ficha.titulo,
        tipoInfo:ficha.tipoInfo,
        postedAt:ficha.postedAt,
        resumen:ficha.resumen,
        fuente:ficha.fuente,
        author:ficha.author,
        clasificacion:ficha.clasificacion._id,
    }
    const form = useFields(initialValues)
    
    
//DATA DE LA MUTACIÓN AL HACER SUBMIT ACLARAR BIEN ESTADO DE LA PÁGINA EN ESTE PUNT0

    if(data && data.updateFicha.success){
        return(
            <Fragment>
                <Message positive floating>
                    <Message.Header>{data.updateFicha.message}</Message.Header>
                    <Message.Content></Message.Content>
                </Message>
                <Button 
                    onClick={e=>{
                        e.preventDefault(e);
                        window.location.reload()
                    }
                }
                basic 
                positive 
                >Salir</Button>
            </Fragment>
        )
    }
    const formSubmit = async ()=>{
        const fields = form.fields;

        updateFicha({variables:fields})
    }
    
    const HandleCategory = (e,{value})=>{
        setClasificacion(value)
    }
    if(LoadingClasif) return <h1>Loading...</h1>
    let Clasif = []
    let ClasificOptions = []
    let SubCLasif = []
    let SubClasOpts = []
    if(allClasificaciones){
        const {clasificaciones} = allClasificaciones.allClasificaciones;
        Clasif = _.uniqBy(clasificaciones,'clasificacion')
        ClasificOptions = Clasif.map(item =>({
            key:item._id,
            value:item.clasificacion,
            text:item.clasificacion
        }))
        if(clasif){
            SubCLasif = _.filter(clasificaciones, { 'clasificacion': clasif })
            SubClasOpts = SubCLasif.map(sub =>({
                key:sub._id,
                value:sub._id,
                text:sub.subClass
            }))
        }
    }
    return(
        <Segment raised>
            <Form onSubmit={e =>{
            e.preventDefault(e);
            formSubmit()
            }}>
                <Form.Field
                    type='text'
                    label='Título'
                    control={Input}
                    placeholder='Título de la Nota'
                    {...form.getInput('titulo')}
                />
                <Form.Field
                    type='text'
                    label='Tipo de información'
                    control={Input}
                    placeholder='Tipo de Información'
                    {...form.getInput('tipoInfo')}
                />
                <Form.Field>
                    <label>Publicado en fecha</label>
                    <input type='Date'  {...form.getStd('postedAt')}/>
                </Form.Field>
                <Form.Field>
                    <label>Resumen</label>
                    <TextArea label='Resumen' placeholder='Resumen de la información' {...form.getInput('resumen')}/>
                </Form.Field>
                <Form.Field>
                <Form.Field
                    type='text'
                    label='Fuente'
                    control={Input}
                    placeholder='Fuente'
                    {...form.getInput('fuente')}
                />
                </Form.Field>
                <Form.Field
                    type='text'
                    label='Involucrados'
                    control={Input}
                    placeholder='Involucrados'
                    {...form.getInput('author')}
                />
                <Form.Field>
                    <label>Categoría</label>
                    <Dropdown
                        fluid
                        search
                        selection
                        name='Categoría'
                        placeholder='Categoría'
                        options={ClasificOptions}
                        onChange={HandleCategory}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Sub-Categoría</label>
                    <Dropdown
                        fluid
                        search
                        selection
                        placeholder='Selecciones primero una categoría'
                        options={SubClasOpts}
                        {...form.getInput('clasificacion')}
                    />
                    {<a id='clasificacion' onClick={e=>{
                        e.preventDefault(e)
                        setShow(e,e.target.id)
                    }} href='/'>Agregar nuevo</a>}
                </Form.Field>
                <ResponsiveButton btnName='Actualizar Ficha'/>
            </Form>
        </Segment>
    )
}

export default UpdateForm;