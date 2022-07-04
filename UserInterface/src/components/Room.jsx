import Button from 'react-bootstrap/Button'
import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Room = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <InputGroup>
                        <InputGroup.Text id="inputGroup-sizing-default">Длина, м</InputGroup.Text>
                        <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                    </InputGroup>
                </Col>
                <Col>
                <InputGroup>
                        <InputGroup.Text id="inputGroup-sizing-default">Длина 2, м</InputGroup.Text>
                        <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputGroup>
                        <InputGroup.Text id="inputGroup-sizing-default">Ширина, м</InputGroup.Text>
                        <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                    </InputGroup>
                </Col>
            </Row>
        </Container>


    )
}

export default Room