import Button from 'react-bootstrap/Button'
import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'

const Room = () => {
    return (
        <>
            <InputGroup>
                <InputGroup.Text>Длина, м</InputGroup.Text>
                <FormControl />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroup.Text>Ширина, м</InputGroup.Text>
                <FormControl />
            </InputGroup>
            <br />
            <Button variant='secondary' className='mb-3'>Вычислить размеры</Button>
            <br />
            <label className='fs-5'>Площадь, м2</label>
            <br />
            <Form.Select className='my-3'>
                <option>РпРсРр</option>
                <option>10-30-30</option>
                <option>30-50-50</option>
                <option>30-50-70</option>
            </Form.Select>
            <InputGroup>
                <InputGroup.Text>hp, м</InputGroup.Text>
                <FormControl />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroup.Text>Кз</InputGroup.Text>
                <FormControl />
            </InputGroup>
        </>
    )
}

export default Room