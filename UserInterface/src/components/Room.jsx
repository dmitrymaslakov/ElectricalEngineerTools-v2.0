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
                <FormControl/>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroup.Text>Ширина, м</InputGroup.Text>
                <FormControl/>
            </InputGroup>
            <br />
            <Button variant='secondary' className='mb-3'>Вычислить размеры</Button>
            <br />
            <label className='fs-5'>Площадь, м2</label>
            <br />
            <Dropdown className='py-4'>
                <Dropdown.Toggle variant='secondary'>
                    PcPvPp
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>10-30-50</Dropdown.Item>
                    <Dropdown.Item>30-50-50</Dropdown.Item>
                    <Dropdown.Item>30-50-70</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <InputGroup>
                <InputGroup.Text>hp, м</InputGroup.Text>
                <FormControl/>
            </InputGroup>

        </>
    )
}

export default Room