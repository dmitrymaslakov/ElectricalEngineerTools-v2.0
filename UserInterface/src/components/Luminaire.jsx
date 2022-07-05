import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'

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
                                <Accordion.Item eventKey="0"y
                                >
                                    <Accordion.Header>Производитель</Accordion.Header>
                                    <Accordion.Body>
                                        <Form>
                                            <Form.Check type='checkbox' label='SVS-Lighting' />
                                            <Form.Check type='checkbox' label='Lighting Technologies' />
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Форма</Accordion.Header>
                                    <Accordion.Body>
                                        <Form>
                                            <Form.Check type='checkbox' label='Прямоугольный' />
                                            <Form.Check type='checkbox' label='Квадратный' />
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
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