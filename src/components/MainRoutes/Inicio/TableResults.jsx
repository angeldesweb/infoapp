import React from 'react';
import { Button, Header, Table , Image } from 'semantic-ui-react';
import moment from 'moment'
import _ from 'lodash'
import { useQuery } from '@apollo/react-hooks';
import { ALL_FICHAS } from '../../../apollo/queries/fichas';

moment.locale('es')
const TableResults = ({setFicha,showModal})=>{
    const {error,loading,data} = useQuery(ALL_FICHAS);
    const handleView = (e)=>{
        setFicha(e.target.value)
        showModal(true)
    }
    if(error) console.log(error);
    if(loading) return <h1>Loading...</h1>
    if(data && data.allFichas.success){
        const fichasArr = _.filter(data.allFichas.fichas,(ficha)=>{
            return moment(Date.now()).format('dddd') === moment(parseInt(ficha.createdAt)).format('dddd')
        })
        return(
            <div>
                <Header color='blue' as='h3' >Realizadas el día de hoy </Header>
                <Table color='blue' textAlign='center'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Imagen</Table.HeaderCell>
                            <Table.HeaderCell>Título</Table.HeaderCell>
                            <Table.HeaderCell>Involucrados</Table.HeaderCell>
                            <Table.HeaderCell>Fecha de publicación</Table.HeaderCell>
                            <Table.HeaderCell>Fecha de la ficha</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {fichasArr.map(ficha=>(
                            <Table.Row key={ficha._id}>
                                <Table.Cell>
                                    <Image src={ficha.image} size='tiny' />
                                </Table.Cell>
                                <Table.Cell>{ficha.titulo}</Table.Cell>
                                <Table.Cell>{ficha.author}</Table.Cell>
                                <Table.Cell>{moment(parseInt(ficha.postedAt)).format("MMM-DD-YYYY")}</Table.Cell>
                                <Table.Cell>{moment(parseInt(ficha.createdAt)).format("MMM-DD-YYYY")}</Table.Cell>
                                <Table.Cell>
                                    <Button onClick={handleView} value={ficha._id} compact color='blue'>Ver ficha</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>          
        )
    }
    return (
        <div>
            <Header color='blue' as='h3' >Realizadas el día de hoy </Header>
            <p>Aún no se registran fichas.</p>
        </div>
    )
}

export default TableResults