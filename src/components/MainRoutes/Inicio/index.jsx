import React, { Fragment, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import FichaRender from './FichaRender.jsx';
import TableResults from './TableResults';
import { GET_FICHA_BY_ID } from '../../../apollo/queries/fichas';
import { Modal , Header , Segment} from 'semantic-ui-react';

const Inicio = ()=>{
    const [value,fetchFicha] = useState(null)
    const [open,showModal] = useState(false)
    const {data} = useQuery(GET_FICHA_BY_ID,{variables:{_id:value}})

    if(data){
        console.log(data.getFichaById.ficha)
    }
    const closeModal = (e)=>{
        e.preventDefault(e)
        showModal(false)
    }
    return(
        <Fragment>
            <TableResults setFicha={fetchFicha} showModal={showModal}/>
            <Modal open={open} basic>
                <Segment color='blue' raised>
                    <Header color='blue' textAlign='center'>Previsualización de ficha</Header>
                </Segment>
                <Modal.Content>
                    <FichaRender ficha={data && data.getFichaById.ficha} closeModal={closeModal} />
                </Modal.Content>
            </Modal>
        </Fragment>
    )
}

export default Inicio