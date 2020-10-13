import React, { Fragment, useState } from 'react'
import _ from 'lodash'
import { Form, TextArea , Button , Segment , Dropdown , Input, Label , Image, Message } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import useFields from '../../../Hooks/useFields';
import ResponsiveButton from '../../../Tools/Forms/ResponsiveButton';
import { useQuery , useMutation } from '@apollo/react-hooks';
import { ALL_CLASIFICACIONES } from '../../../../apollo/queries/clasificaciones'
import { CREATE_FICHA } from '../../../../apollo/mutations/fichas';
import { SINGLE_UPLOAD } from '../../../../apollo/mutations/custom';

const CrearForm = ({setShow})=>{
    const [clasif,setClasificacion] = useState(null);
    const [fileImage,setImage] = useState(null)
    const [dropped,dropImage] = useState(false);
    const {data:allClasificaciones,loading:LoadingClasif} = useQuery(ALL_CLASIFICACIONES);
    const [createFicha,{data}] = useMutation(CREATE_FICHA);
    const [singleUpload] = useMutation(SINGLE_UPLOAD)
    const initialValues = {
        codigo:Math.random().toString(),
        titulo:'',
        tipoInfo:'',
        postedAt:'',
        resumen:'',
        fuente:'',
        author:'',
        image:'NOT IMAGE',
        clasificacion:'',
        postedBy:localStorage.getItem('usuario')
    }
    const form = useFields(initialValues)
//DATA DE LA MUTACIÓN AL HACER SUBMIT ACLARAR BIEN ESTADO DE LA PÁGINA EN ESTE PUNT0

    if(data && data.createFicha.success){
        return(
            <Fragment>
                <Message positive floating>
                    <Message.Header>{data.createFicha.message}</Message.Header>
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
                >Nueva ficha</Button>
            </Fragment>
        )
    }
    const onDrop = ([file])=>{
        file.preview = URL.createObjectURL(file)
        setImage(
            {
                file
            }
        )
        dropImage(true)
    }
    const formSubmit = async ()=>{
        const imageMutation = await singleUpload({
            variables: { file:fileImage }
        })
        console.log(imageMutation.data.singleUpload)
        const url = imageMutation.data.singleUpload.url
        const fields = form.fields;
        fields.image = url

        createFicha({variables:fields})

        form.setFields(initialValues)
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
            <Form.Field >
                <label>Imagen</label>
                {!dropped &&                
                    <Dropzone  onDrop={onDrop}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                            <div {...getRootProps()}>
                                <input style={{height:'200px'}} {...getInputProps()} />
                                <Segment textAlign='center' placeholder><Label basic color='blue'>Arrastre la imagen a esta área o click aquí</Label></Segment>
                            </div>
                            </section>
                        )}
                    </Dropzone>
                    }
                {dropped &&
                    <Segment>
                        <Image centered size='small' src={fileImage.file.preview}/>
                        <Button basic color='teal' onClick={e=>{
                            setImage(null)
                            dropImage(false)
                        }}>Cambiar</Button>
                    </Segment>
                }
            </Form.Field>
            <ResponsiveButton btnName='Crear Ficha'/>
        </Form>
    )
}

export default CrearForm;