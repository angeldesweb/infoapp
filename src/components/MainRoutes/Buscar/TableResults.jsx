import React from 'react';
import { Button, Header, Table , Image } from 'semantic-ui-react';
import moment from 'moment'
moment.locale('es')

const TableResults = ({setFicha,showModal,fichas,showUpdate})=>{
    
    const handleView = (e)=>{
        setFicha(e.target.value)
        showModal(true)
    }
    const handleUpdate = (e)=>{
        setFicha(e.target.value)
        showUpdate(true)
    }
    return(
        <div>
            <Header color='blue' as='h3' >Resultados</Header>
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
                    {fichas.map(ficha=>(
                        <Table.Row key={ficha._id}>
                            <Table.Cell>
                                <Image src={ficha.image} size='tiny' />
                            </Table.Cell>
                            <Table.Cell>{ficha.titulo}</Table.Cell>
                            <Table.Cell>{ficha.author}</Table.Cell>
                            <Table.Cell>{moment(parseInt(ficha.postedAt)).format("MMM-DD-YYYY")}</Table.Cell>
                            <Table.Cell>{moment(parseInt(ficha.createdAt)).format("MMM-DD-YYYY")}</Table.Cell>
                            <Table.Cell>
                                <Button.Group>
                                    <Button onClick={handleView} value={ficha._id} compact color='blue'>Ver ficha</Button>
                                    <Button basic compact color='blue' onClick={handleUpdate} value={ficha._id}>Modificar Ficha</Button>
                                </Button.Group>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>          
    )
}

export default TableResults