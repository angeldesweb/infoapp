import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react';
import { ClasificacionForm } from '../../forms/Clasificacion';

function ModalFormClasificacion({ show , setShow }) {
  return (
    <Modal
      open={show.open}
    >
      <Modal.Header>Agregar</Modal.Header>
        <Modal.Content image>
            <Modal.Description>
                <Header>Nueva categoría</Header>
                <ClasificacionForm setShow={setShow}/>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button color='black' onClick={e => setShow()}>
                Atrás
            </Button>
        </Modal.Actions>
    </Modal>
  )
}

export default ModalFormClasificacion