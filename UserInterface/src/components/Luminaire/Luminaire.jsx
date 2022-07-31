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
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey)

    return (
        <label onClick={decoratedOnClick}>{children}</label>
    )
}

let cards = (params) => {
    return(
        params.luminaireParameters.map(parameter =>
            <Card key={parameter.id}>
                <Card.Header>
                    <CustomToggle eventKey={parameter.id.toString()}>{parameter.name}</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey={parameter.id.toString()}>
                    <Card.Body>
                        <Form>
                            {parameter.value.map(name => <Form.Check type='checkbox' label={name} key={name}/>)}
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    )
}

function LuminaireParams(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" fullscreen='true' size='lg'>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Выбери светильник
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <Accordion defaultActiveKey={props.luminaireParameters.map(p => p.id.toString())} alwaysOpen>
                                {cards({...props})}
                            </Accordion>
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
    try{
        const [modalShow, setModalShow] = useState(false)

        return (    
            <>
                <label className='fs-5'>Тип светильника</label>
                <br />
                <Button variant='secondary' className='my-3' onClick={() => setModalShow(true)}>Выбрать светильник</Button>
                <Button variant='secondary' className='my-3' onClick={() => props.thunkLum()}>Launch</Button>
                <Button variant='secondary' className='my-3' onClick={() => props.addParameter('qwe')}>Add</Button>
                <LuminaireParams {...props} show={modalShow} onHide={() => setModalShow(false)} />
                <br />
                <label className='fs-5 mb-3'>Лампа</label>
                <br />
                <label className='fs-5 mb-3'>Мощность, Вт</label>
                <br />
                <InputGroup>
                    <InputGroup.Text>Световой поток, лм</InputGroup.Text>
                    <FormControl />
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroup.Text>Высота установки, м</InputGroup.Text>
                    <FormControl />
                </InputGroup>
            </>
        )
    }catch(e) {
        return <div>{e.Body}</div>
      }
    
}

export default Luminaire