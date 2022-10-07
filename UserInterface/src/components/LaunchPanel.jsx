import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import LuminairesManagement from './LuminairesManagement/LuminairesManagement'


const LaunchPanel = (props) => {
    const [modalShow, setModalShow] = useState(false)
    const [fullscreen, setFullscreen] = useState(true)

    return <ButtonGroup vertical className='my-3'>
        <Button variant='secondary'>Расчет освещенности</Button>
        <Button variant='secondary'>Расставить светильники</Button>
        <Button variant='secondary'>Вставить светильник</Button>
        {/* <Button variant='secondary' onClick={() => setModalShow(true)}>Менеджмент светильников</Button>
        <LuminairesManagement {...props} show={modalShow} fullscreen={fullscreen} onHide={() => setModalShow(false)} /> */}
    </ButtonGroup>
}

export default LaunchPanel