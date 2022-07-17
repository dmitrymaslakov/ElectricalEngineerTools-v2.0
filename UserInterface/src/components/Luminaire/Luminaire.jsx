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

let luminaireData = [
    {
        id: '0', dataType: {
            type: 'Производитель',
            namesType: ['SVS-Lighting', 'Lighting Technologies', 'ЗАО Белинтегра']
        }
    },
    {
        id: '1', dataType: {
            type: 'Форма',
            namesType: ['Прямоугольный', 'Квадрат']
        }
    },
    {
        id: '2', dataType: {
            type: 'Способ монтажа',
            namesType: ['Потолочный', 'Встраиваемый в Armstrong', 'Встраиваемый в гипсокартон', 'Подвесной']
        }
    },
    {
        id: '3', dataType: {
            type: 'Источник света',
            namesType: ['Светодиодный модуль', 'Светодиодная лампа', 'Люминесцентная лампа', 'Лампа накаливания']
        }
    },
    {
        id: '4', dataType: {
            type: 'Количество ламп в светильнике',
            namesType: [1, 2, 3, 4]
        }
    },
    {
        id: '5', dataType: {
            type: 'Климатическое исполнение',
            namesType: ['УХЛ1', 'УХЛ2', 'УХЛ4', 'УХЛ5']
        }
    }
    ,
    {
        id: '6', dataType: {
            type: 'Остальные параметры',
            namesType: ['Пылевлагозащищенный', 'Пожаробезопасный', 'Взрывобезопасный', 'БАП']
        }
    }
]

let cards = luminaireData.map(luminaire =>
    <Card>
        <Card.Header>
            <CustomToggle eventKey={luminaire.id}>{luminaire.dataType.type}</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={luminaire.id}>
            <Card.Body>
                <Form>
                    {luminaire.dataType.namesType.map(name => <Form.Check type='checkbox' label={name} />)}
                </Form>
            </Card.Body>
        </Accordion.Collapse>
    </Card>
)

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
                            <Accordion defaultActiveKey={['0', '1', '2', '3', '4', '5', '6']} alwaysOpen>
                                {cards}
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
    let t = props.addManufacturer('pop')
    debugger
    const [modalShow, setModalShow] = useState(false)

    return (
        <>
            <label className='fs-5'>Тип светильника</label>
            <br />
            <Button variant='secondary' className='my-3' onClick={() => setModalShow(true)}>Выбрать светильник</Button>
            <LuminaireParams show={modalShow} onHide={() => setModalShow(false)} />
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
}

export default Luminaire