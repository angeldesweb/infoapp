import React from 'react';
import { Segment } from 'semantic-ui-react';
import { NoFichaMessage } from '../../../messages/RenderMessages/NoFichaMessage';
import { TableFichas } from '../../../tables/TableFichas';
import { ModalRenderFicha } from '../../../modals/ModalRenderFicha'


const InicioComponent = ({ fichas , ficha , render , setRender , setFicha }) => {

    if(fichas.length <= 0){
        return (
            <Segment raised>
                <NoFichaMessage/>
            </Segment>
        )
    }
    return(
        <Segment>
            <TableFichas fichas={fichas} setFicha={setFicha}/>
            <ModalRenderFicha show={render} setShow={setRender} ficha={ficha}/>
        </Segment>
    )

}

export default InicioComponent