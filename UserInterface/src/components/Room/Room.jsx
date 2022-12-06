import Button from 'react-bootstrap/Button'
import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Card from 'react-bootstrap/Card'

const Room = (props) => {
    const newLength = React.createRef()
    const newWidth = React.createRef()
    const newPcPwPws = React.createRef()
    const newWorkingSurfaceHeight = React.createRef()
    const newSafetyFactor = React.createRef()
    const newNumberAlongX = React.createRef()
    const newNumberAlongY = React.createRef()

    const onLengthChange = () => {
        const length = newLength.current.value
        props.updateLength(length)
        props.updateArea()
    }

    const onWidthChange = () => {
        const width = newWidth.current.value
        props.updateWidth(width)
        props.updateArea()
    }

    const onPcPwPwsChange = (e) => {
        props.updatePcPwPws(e.target.value)
    }

    const onWorkingSurfaceHeightChange = () => {
        const workingSurfaceHeight = newWorkingSurfaceHeight.current.value
        props.updateWorkingSurfaceHeight(workingSurfaceHeight)
    }

    const onSafetyFactorChange = () => {
        const safetyFactor = newSafetyFactor.current.value
        props.updateSafetyFactor(safetyFactor)
    }

    const onNumberAlongXChange = () => {
        const numberAlongX = newNumberAlongX.current.value
        props.updateNumberAlongX(numberAlongX)
    }

    const onNumberAlongYChange = () => {
        const numberAlongY = newNumberAlongY.current.value
        props.updateNumberAlongY(numberAlongY)
    }

    return (
        <>
            <InputGroup>
                <InputGroup.Text>Длина, м</InputGroup.Text>
                <FormControl value={props.length} ref={newLength} onChange={onLengthChange} />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroup.Text>Ширина, м</InputGroup.Text>
                <FormControl value={props.width} ref={newWidth} onChange={onWidthChange} />
            </InputGroup>
            <br />
            <Button onClick={(e) => { props.launchRoomDimensions() }} variant='secondary' className='mb-3'>Вычислить размеры</Button>
            <br />
            <label className='fs-5'>Площадь, <label className='fs-5'>{props.area}  м2</label></label>
            <br />
            <InputGroup>
                <InputGroup.Text>РпРсРр</InputGroup.Text>
                <Form.Select onChange={(e) => onPcPwPwsChange(e)}>
                    {props.PcPwPwsList.map(p => <option key={p}>{p}</option>)}
                </Form.Select>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroup.Text>hp, м</InputGroup.Text>
                <FormControl value={props.workingSurfaceHeight} ref={newWorkingSurfaceHeight} onChange={onWorkingSurfaceHeightChange}/>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroup.Text>Кз</InputGroup.Text>
                <FormControl value={props.safetyFactor} ref={newSafetyFactor} onChange={onSafetyFactorChange}/>
            </InputGroup>
            <br />
            <Card>
                <Card.Header as="h6">Расположение в пространстве</Card.Header>
                <Card.Body>
                    <InputGroup>
                        <InputGroup.Text>Число X</InputGroup.Text>
                        <FormControl value={props.numberAlongX} ref={newNumberAlongX} onChange={onNumberAlongXChange}/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text>Число Y</InputGroup.Text>
                        <FormControl value={props.numberAlongY} ref={newNumberAlongY} onChange={onNumberAlongYChange}/>
                    </InputGroup>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header as="h6">Расчетное значение освещенности</Card.Header>
                <Card.Text>
                    {props.illuminance === undefined ? '' : props.illuminance} люкс
                </Card.Text>
            </Card>
        </>
    )
}

export default Room