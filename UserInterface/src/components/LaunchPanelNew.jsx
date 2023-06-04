import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { luminaireService } from '../api/luminaireService'

const LaunchPanelNew = ({calculateIlluminance}) => {

    return <ButtonGroup vertical className='my-3'>
        <Button variant='secondary' onClick={calculateIlluminance}>Расчет освещенности</Button>
        <Button variant='secondary'>Расставить светильники</Button>
        <Button variant='secondary'>Вставить светильник</Button>
    </ButtonGroup>
}

export default LaunchPanelNew
