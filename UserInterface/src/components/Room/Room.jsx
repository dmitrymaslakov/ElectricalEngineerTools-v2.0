import Button from 'react-bootstrap/Button'
import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Card from 'react-bootstrap/Card'

const Room = (props) => {
    const newLength = React.createRef()
    const onLengthChange = () => {
        const length = newLength.current.value
        props.updateLength(length)
        props.updateArea({length: props.dimensions.length, width: props.dimensions.width})
        console.log(props.area)
    }
    const newWidth = React.createRef()
    const onWidthChange = () => {
        const width = newWidth.current.value
        props.updateWidth(width)
        props.updateArea({length: props.dimensions.length, width: props.dimensions.width})
        console.log(props.area)
    }
    return (
        <>
            <InputGroup>
                <InputGroup.Text>Длина, м</InputGroup.Text>
                <FormControl value={props.dimensions.length} ref={newLength} onChange={onLengthChange}/>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroup.Text>Ширина, м</InputGroup.Text>
                <FormControl value={props.dimensions.width} ref={newWidth} onChange={onWidthChange}/>
            </InputGroup>
            <br />
            <Button onClick={(e) => {props.launchRoomDimensions()}} variant='secondary' className='mb-3'>Вычислить размеры</Button>
            <br />
            <label className='fs-5'>Площадь, м2 <label className='fs-5'>{props.area}</label></label>
            <br />
            <Form.Select className='my-3'>
                <option>РпРсРр</option>
                <option value='10-30-30'>10-30-30</option>
                <option value='30-50-50'>30-50-50</option>
                <option value='30-50-70'>30-50-70</option>
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
            <br />
            <Card>
                <Card.Header as="h6">Расположение в пространстве</Card.Header>
                <Card.Body>
                    <InputGroup>
                        <InputGroup.Text>Число X</InputGroup.Text>
                        <FormControl />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text>Число Y</InputGroup.Text>
                        <FormControl />
                    </InputGroup>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header as="h6">Расчетное значение освещенности</Card.Header>
                <Card.Text>
                    0.0 люкс
                </Card.Text>
            </Card>
        </>
    )
}

export default Room