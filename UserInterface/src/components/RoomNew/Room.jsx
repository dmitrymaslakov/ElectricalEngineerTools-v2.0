import Button from 'react-bootstrap/Button'
import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Card from 'react-bootstrap/Card'
import { luminaireService } from '../../api/luminaireService'

const Room = ({ room, setRoom }) => {
    const onChangeRoom = (roomProp, newValue) => {
        //const numericValue = Number(numericString)
        newValue = isNaN(newValue) ? newValue : Number(newValue)
        setRoom({ ...room, [roomProp]: newValue })
    }

    const onMeasureRoom = () => {
        luminaireService.measureRoom()
            .then(dimensions => {
                const [length, width] = dimensions
                //setRoom({ ...room, length: length, width: width, area: length * width })
                setRoom({ ...room, length: length, width: width })
            })
    }

    return <>
        <InputGroup>
            <InputGroup.Text>Длина, м</InputGroup.Text>
            <FormControl value={room.length} onChange={e => onChangeRoom('length', e.target.value)} />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroup.Text>Ширина, м</InputGroup.Text>
            <FormControl value={room.width} onChange={e => onChangeRoom('width', e.target.value)} />
        </InputGroup>
        <br />
        <Button variant='secondary' className='mb-3' onClick={onMeasureRoom}>Вычислить размеры</Button>
        <br />
        <label className='fs-5'>Площадь, <label className='fs-5'>{room.area}  м2</label></label>
        <br />
        <InputGroup>
            <InputGroup.Text>РпРсРр</InputGroup.Text>
            <Form.Select onChange={e => onChangeRoom('PcPwPws', e.target.value)}>
                {room.PcPwPwsList.map(p => <option key={p}>{p}</option>)}
            </Form.Select>
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroup.Text>hp, м</InputGroup.Text>
            <FormControl value={room.workingSurfaceHeight} onChange={e => onChangeRoom('workingSurfaceHeight', e.target.value)} />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroup.Text>Кз</InputGroup.Text>
            <FormControl value={room.safetyFactor} onChange={e => onChangeRoom('workingSurfaceHeight', e.target.value)} />
        </InputGroup>
        <br />
        <Card>
            <Card.Header as="h6">Расположение в пространстве</Card.Header>
            <Card.Body>
                <InputGroup>
                    <InputGroup.Text>Число X</InputGroup.Text>
                    <FormControl value={room.numberAlongX} onChange={e => onChangeRoom('numberAlongX', e.target.value)} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Число Y</InputGroup.Text>
                    <FormControl value={room.numberAlongY} onChange={e => onChangeRoom('numberAlongY', e.target.value)} />
                </InputGroup>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header as="h6">Расчетное значение освещенности</Card.Header>
            <Card.Text>
                {room.illuminance} люкс
            </Card.Text>
        </Card>
    </>
}

export default Room