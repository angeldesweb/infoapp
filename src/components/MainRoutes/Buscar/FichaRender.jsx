import React, { Fragment , Component , useRef } from 'react';
import { Header, Table , Image ,Button } from 'semantic-ui-react';
import { useReactToPrint } from 'react-to-print';
import moment from 'moment'
moment.locale('es')

const FichaRender = (props) => {
    const { ficha , closeModal } = props
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    if(!ficha) return <h1>Loading...</h1>
    return (
        <div>
            <TableFicha ref={componentRef} ficha={ficha} />
            <Button circular onClick={closeModal} icon='close' basic inverted color='blue'/>
            <Button circular onClick={handlePrint} icon='print' basic inverted color='green'/>
        </div>
    )
  }

class TableFicha extends Component{
    render(){
        return (
            <Fragment>
                <Table celled structured compact='very' textAlign='center'>
                    <Table.Header>
                        <Table.Row >
                            <Table.HeaderCell colSpan='3' verticalAlign='middle'  >
                                <Image floated='left' verticalAlign='middle' size='tiny' src='./images/Logo.png'/>
                                <Header color='blue' as='h1' inverted>FICHA INFORMATIVA</Header>
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
                                {this.props.ficha.titulo}
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
                                {this.props.ficha.clasificacion.clasificacion}
                            </Table.Cell>
                            <Table.Cell>
                                {this.props.ficha.clasificacion.subClass}
                            </Table.Cell>
                            <Table.Cell>
                                {this.props.ficha.tipoInfo}
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
                                {moment(parseInt(this.props.ficha.postedAt)).format("MMM-DD-YYYY")}
                            </Table.Cell>
                            <Table.Cell>
                                {moment(parseInt(this.props.ficha.createdAt)).format("MMM-DD-YYYY")}
                            </Table.Cell>
                            <Table.Cell>
                                {this.props.ficha.postedBy.nombre}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colSpan='3'>
                                <Header>Resumen</Header>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colSpan='3'>
                                {this.props.ficha.resumen}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colSpan='3'>
                                <Header>Fuente de la información</Header>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colSpan='3'>
                                {this.props.ficha.fuente}
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

export default FichaRender
