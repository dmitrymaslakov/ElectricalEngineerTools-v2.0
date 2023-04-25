import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import PaginationBasic from './Pagination'
import ListGroup from 'react-bootstrap/ListGroup'
import LuminaireDetails from './LuminaireDetails'
import AddToDb from './AddToDb'

const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey)

    return (
        <label onClick={decoratedOnClick}>{children}</label>
    )
}

let cards = (params) => {
    return (
        params.map(parameter =>
            <Card key={parameter.id}>
                <Card.Header>
                    <CustomToggle eventKey={parameter.id.toString()}>{parameter.name}</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey={parameter.id.toString()}>
                    <Card.Body>
                        <Form>
                            {parameter.value.map(name => <Form.Check type='checkbox' label={name} key={name} />)}
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    )
}

function LuminairePicking(props) {
    const [detailsModal, setDetailsModal] = useState(false)
    const [addToDbModal, setAddToDbModal] = useState(false)
    const [fullscreen, setFullscreen] = useState(true)

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Выбери светильник
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='show-grid'>
                <Container>
                    <Row>
                        <Col xs={3}>
                            <Accordion defaultActiveKey={props.luminaireParameters.map(p => p.id.toString())} alwaysOpen>
                                {cards(props.luminaireParameters)}
                            </Accordion>
                        </Col>
                        <Col>
                            <PaginationBasic
                                pageSize={props.pageSize}
                                totalPages={props.totalPages}
                                currentPage={props.currentPage}
                                //onPageChanged={props.onPageChanged}
                                onPageChanged={console.log(props.onPageChanged)}
                            />
                            <ListGroup variant='flush'>
                                {
                                    props.luminaires.map(l =>
                                        <ListGroup.Item key={l.Id}>
                                            <InputGroup>
                                                <InputGroup.Radio id={l.Id} name='listGroupRadio' onClick={() => props.onLuminairePicked(l)} />
                                                <label className='fs-5 mb-3 ms-3' for={l.Id} onClick={() => props.onLuminairePicked(l)}>{l.Brand}</label>
                                            </InputGroup>
                                        </ListGroup.Item>)
                                }
                            </ListGroup>
                            <ButtonGroup horizontal className='my-3'>
                                <Button variant='secondary' onClick={() => setDetailsModal(true)}>Детали</Button>
                                <Button variant='secondary' onClick={() => setAddToDbModal(true)}>Добавить в базу</Button>
                            </ButtonGroup>
                            <LuminaireDetails {...props} show={detailsModal} fullscreen={fullscreen} onHide={() => setDetailsModal(false)} />
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}


const Luminaire = (props) => {
    const newLuminousFlux = React.createRef()
    const newMountingHeight = React.createRef()

    const onLuminousFluxChange = () => {
        const luminousFlux = newLuminousFlux.current.value
        props.onLuminousFluxChanged(luminousFlux)
    }

    const onMountingHeightChanged = () => {
        const mountingHeight = newMountingHeight.current.value
        props.onMountingHeightChanged(mountingHeight)
    }
    const [modalShow, setModalShow] = useState(false)
    const [fullscreen, setFullscreen] = useState(true)

    return (
        <>
            <label className='fs-5'>Тип светильника {props.pickedLuminaire.brand}</label>
            <br />
            <Button variant='secondary' className='my-3' onClick={() => setModalShow(true)}>Выбрать светильник</Button>
            <LuminairePicking {...props} show={modalShow} fullscreen={fullscreen} onHide={() => setModalShow(false)} />
            <br />
            <label className='fs-5 mb-3'>Лампа {props.pickedLuminaire.LightSourceInfo === undefined ? '' : props.pickedLuminaire.LightSourceInfo.LightSourceType}</label>
            <br />
            <label className='fs-5 mb-3'>Мощность, {props.pickedLuminaire.LightSourceInfo === undefined ? '' : props.pickedLuminaire.LightSourceInfo.Power} Вт</label>
            <br />
            <InputGroup>
                <InputGroup.Text>Световой поток, лм</InputGroup.Text>
                <FormControl value={props.luminousFlux} ref={newLuminousFlux} onChange={onLuminousFluxChange} />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroup.Text>Высота установки, м</InputGroup.Text>
                <FormControl value={props.mountingHeight} ref={newMountingHeight} onChange={onMountingHeightChanged} />
            </InputGroup>
        </>
    )
}

export default Luminaire