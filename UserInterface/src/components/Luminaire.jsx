import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey)

    return (
        <label onClick={decoratedOnClick}>{children}</label>
    )
}

function MydModalWithGrid(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Выбери светильник
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
                                <Card>
                                    <Card.Header>
                                        <CustomToggle eventKey='0'>Производитель</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey='0'>
                                        <Card.Body>
                                            <Form>
                                                <Form.Check type='checkbox' label='SVS-Lighting' />
                                                <Form.Check type='checkbox' label='Lighting Technologies' />
                                            </Form>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <CustomToggle eventKey='1'>Форма</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey='1'>
                                        <Card.Body>
                                            <Form>
                                                <Form.Check type='checkbox' label='Прямоугольный' />
                                                <Form.Check type='checkbox' label='Квадрат' />
                                            </Form>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
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

const Luminaire = () => {
    const [modalShow, setModalShow] = useState(false)

    return (
        <>
            <label className='fs-5'>Тип светильника</label>
            <br />
            <Button variant='secondary' className='my-3' onClick={() => setModalShow(true)}>Выбрать светильник</Button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default Luminaire