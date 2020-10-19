import React, { Fragment , Component , useRef } from 'react';
import { Header, Table , Image ,Button } from 'semantic-ui-react';
import { useReactToPrint } from 'react-to-print';
import moment from 'moment'
moment.locale('es')

//---POR FUNCIONALIDAD SE HA DEJADO EN UN MISMO FICHERO EL SISTEMA PARA IMPRIMIR Y EL COMPONENTE PRESENTACIONAL
//---NO HACER CAMBIOS SI NO SE ESTA BIEN SEGURO
const TableFicha = (props) => {
    const { ficha , closeModal } = props
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      copyStyles : true
    });
    if(!ficha) return <h1>Loading...</h1>
    return (
        <div>
            <Button circular onClick={closeModal} icon='close' basic inverted color='blue'/>
            <Button circular onClick={handlePrint} icon='print' basic inverted color='green'/>
            <RenderFicha ref={componentRef} ficha={ficha} />
        </div>
    )
  }
//---COMPONENTE DEBE MANTENERSE CLASS PARA PODER EXPORTAR EN PDF
class RenderFicha extends Component{
    render(){
        return (
            <Fragment>
            <Table celled structured color='blue' inverted compact='very' textAlign='center'>
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell  colSpan='3' verticalAlign='middle'  >
                            <Image floated='left' verticalAlign='middle' size='tiny' src='./images/Logo.png'/>
                            <Header as='h1' inverted>FICHA INFORMATIVA</Header>
                        </Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Header>Título</Header>
                        </Table.HeaderCell>
                    </Table.Row>

                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell colSpan='3'>
                            <Header inverted>{this.props.ficha.titulo}</Header>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Header>Clasificación</Header>
                        </Table.Cell>
                        <Table.Cell>
                            <Header>Sub clasificación</Header>
                        </Table.Cell>
                        <Table.Cell>
                            <Header>Tipo de información</Header>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Header inverted >{this.props.ficha.clasificacion.clasificacion}</Header>
                        </Table.Cell>
                        <Table.Cell>
                            <Header inverted >{this.props.ficha.clasificacion.subClass}</Header>
                        </Table.Cell>
                        <Table.Cell>
                            <Header inverted >{this.props.ficha.tipoInfo}</Header>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Header>Fecha del artículo</Header>
                        </Table.Cell>
                        <Table.Cell>
                            <Header>Fecha sala</Header>
                        </Table.Cell>
                        <Table.Cell>
                            <Header>Emisor</Header>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Header inverted>{moment(parseInt(this.props.ficha.postedAt)).format("MMM-DD-YYYY")}</Header>
                        </Table.Cell>
                        <Table.Cell>
                            <Header inverted>{moment(parseInt(this.props.ficha.createdAt)).format("MMM-DD-YYYY")}</Header>
                        </Table.Cell>
                        <Table.Cell>
                            <Header inverted>{this.props.ficha.postedBy.nombre}</Header>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell colSpan='3'>
                            <Header>Resumen</Header>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell colSpan='3'>
                            <Header inverted>{this.props.ficha.resumen}</Header>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell colSpan='3'>
                            <Header>Fuente de la información</Header>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell colSpan='3'>
                            <Header inverted>{this.props.ficha.fuente}</Header>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell colSpan='3'>
                            <Header>Imagen</Header>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell colSpan='3'>
                            <Image centered size='small' src={this.props.ficha.image} spaced/>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <br/>
        </Fragment>
        )
    }
}

export default TableFicha