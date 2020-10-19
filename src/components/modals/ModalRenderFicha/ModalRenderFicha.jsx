import React from 'react';
import { Modal , Segment , Header } from 'semantic-ui-react';
import { TableFicha } from '../../tables/TableFicha'

const ModalRenderFicha = ({ show , setShow , ficha }) => {
    return (
        <Modal open={show.render} basic>
            <Segment color='blue' raised>
                <Header color='blue' textAlign='center'>Previsualización de ficha</Header>
            </Segment>
            <Modal.Content>
                <TableFicha ficha={ficha} closeModal={setShow} />
            </Modal.Content>
        </Modal>
    )
}

export default ModalRenderFicha;
