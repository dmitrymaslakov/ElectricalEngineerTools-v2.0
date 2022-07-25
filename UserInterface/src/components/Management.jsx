import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

class Management extends React.Component {

    render() {
        return <ButtonGroup vertical className='my-3'>
            <Button variant='secondary'>Расчет освещенности</Button>
            <Button variant='secondary'>Расставить светильники</Button>
            <Button variant='secondary'>Вставить светильник</Button>
            <Button variant='secondary'>Менеджмент светильников</Button>
        </ButtonGroup>
    }
}

export default Management