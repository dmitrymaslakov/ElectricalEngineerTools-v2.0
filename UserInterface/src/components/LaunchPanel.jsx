import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import LuminairesManagement from './LuminairesManagement/LuminairesManagement'
import { getIlluminance } from '../redux/room-slice'


const LaunchPanel = (props) => {
    /*const [modalShow, setModalShow] = useState(false)
    const [fullscreen, setFullscreen] = useState(true)*/

    return <ButtonGroup vertical className='my-3'>
        <Button variant='secondary' onClick={props.getIlluminance}>Расчет освещенности</Button>
        <Button variant='secondary'>Расставить светильники</Button>
        <Button variant='secondary'>Вставить светильник</Button>
    </ButtonGroup>
}

export default connect(null, { getIlluminance })(LaunchPanel)
