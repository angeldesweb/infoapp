import React, { Fragment, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import _ from 'lodash';
import FichaRender from './FichaRender.jsx';
import TableResults from './TableResults';
import { ALL_FICHAS , GET_FICHA_BY_ID } from '../../../apollo/queries/fichas';
import { Modal , Header , Segment ,Form, Button } from 'semantic-ui-react';
import moment from 'moment';
import { ALL_CLASIFICACIONES } from '../../../apollo/queries/clasificaciones.js';
import UpdateForm from './UpdateForm.jsx'
moment.locale('es');

const Buscar = ()=>{
    const [value,fetchFicha] = useState(null)
    const [open,showModal] = useState(false)
    const [update,setUpdate] = useState(false)
    const [clasif,setClasificacion] = useState(null);
    const {data} = useQuery(ALL_FICHAS)
    const {data:getFichaById} = useQuery(GET_FICHA_BY_ID,{variables:{_id:value}})
    const {data:categories,loading:loadClasif} = useQuery(ALL_CLASIFICACIONES)
    const [results,setResults] = useState({})
    const [category,setCategory] = useState('');
    const [subCategory,setSubCategory] = useState('');
    //------------------------------CONTROLADOR SELECTS----------------------------------------------------
    let Clasif = []
    let ClasificOptions = []
    let SubCLasif = []
    let SubClasOpts = []
    if(loadClasif) return <h1>Loading...</h1>
    if(categories.allClasificaciones){
        const {clasificaciones} = categories.allClasificaciones;
        Clasif = _.uniqBy(clasificaciones,'clasificacion')
        ClasificOptions = Clasif.map(item =>({
            key:item._id,
            value:item._id,
            text:item.clasificacion
        }))
            if(clasif){
                SubCLasif = _.filter(clasificaciones, { '_id': clasif })
                SubClasOpts = SubCLasif.map(sub =>({
                    key:sub._id,
                    value:sub.subClass,
                    text:sub.subClass
                }))
            }
    }
    if(categories.allClasificaciones){

    }
    const HandleCategory = (e,{value,name})=>{
        setClasificacion(value)
        setCategory(value)
        const clasArr = _.filter(data.allFichas.fichas,(ficha)=>{
            return ficha.clasificacion._id === value
        })
        if(!results.length){
            setResults(clasArr);
        }
        if(results.length){
            const newResults = _.filter(results,(ficha)=>{
                return ficha.clasificacion._id === value
            });
            setResults(newResults);
        }
    }
    const HandleSubCtegory = (e,{value,name})=>{
            setSubCategory(value)
            const subArr = _.filter(data.allFichas.fichas,(ficha)=>{
                return ficha.clasificacion.subClass === value
            })
            if(!results.length){
                setResults(subArr);
            }
            if(results.length){
                const newResults = _.filter(results,(ficha)=>{
                    return ficha.clasificacion.subClass === value
                });
                setResults(newResults);
            }
        }
    //---------------------------------------CONTROLADOR DATE---------------------------------------------------
    const handleDateChange = (e) =>{
        const dateSearch = e.target.value
        const fichasArr = _.filter(data.allFichas.fichas,(ficha)=>{
            return moment(dateSearch).format('dddd') === moment(parseInt(ficha.createdAt)).format('dddd')
        });
        if(!results.length){
            setResults(fichasArr);
        }
        if(results.length){
            const newResults = _.filter(results,(ficha)=>{
                return moment(dateSearch).format('dddd') === moment(parseInt(ficha.createdAt)).format('dddd')
            });
            setResults(newResults);
        }
    }
    const closeModal = (e)=>{
        e.preventDefault(e)
        showModal(false)
    }
    return(
        <Fragment>
            <Segment raised>    
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Fecha de la Ficha</label>
                            <input type='Date' onChange={handleDateChange}></input>
                        </Form.Field>
                        
                        <Form.Select label='Categoría' name='_id' value={category} options={ClasificOptions} onChange={HandleCategory}/>
                        <Form.Select label='Sub Categoría' name='subClass' value={subCategory} options={SubClasOpts} onChange={HandleSubCtegory}/>
                    </Form.Group>
                </Form>
            </Segment>
            {results.length &&  
                <Fragment>
                    <TableResults setFicha={fetchFicha} showModal={showModal} showUpdate={setUpdate} fichas={results}/>
                    <Modal open={open} basic>
                        <Segment color='blue' raised>
                            <Header color='blue' textAlign='center'>Previsualización de ficha</Header>
                        </Segment>
                        <Modal.Content>
                            <FichaRender ficha={getFichaById && getFichaById.getFichaById.ficha} closeModal={closeModal} />
                        </Modal.Content>
                    </Modal>
                </Fragment>
            }
            {update && 
                <Fragment>
                        <Modal open={update} basic>
                            <Segment color='blue' raised>
                                <Header color='blue' textAlign='center'>Modificar ficha</Header>
                            </Segment>
                            <Modal.Content>
                                <UpdateForm ficha={getFichaById && getFichaById.getFichaById.ficha} />
                            </Modal.Content>
                            <Modal.Actions>
                                <Button circular basic color='blue' icon='close' onClick={e=>setUpdate(false)} />
                            </Modal.Actions>
                        </Modal>
                </Fragment>
            }
        </Fragment>
    )
}

export default Buscar
