import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { luminaireApi } from '../api/api'
import { getIlluminance } from '../redux/room-slice'

const eA = () => {
    const execAsync = window['execAsync']
    const Acad = window['Acad']
    //let encoded = encodeURIComponent(JSON.stringify({ name: 'Дима' }))
    let encoded = window.btoa(unescape(encodeURIComponent(JSON.stringify({ name: 'Дима' }))))

    const p = new Promise((resolve, reject) => {
        execAsync(JSON.stringify({
            functionName: 'AsyncOperation',
            functionParams: encoded
        }), result => {
            resolve(result)
        }, result => {
            reject(result)
        })
    })
    //console.log(p)
    p.then(r => console.log(r))
        .catch(e => console.log(e))
}

const eap = () => {
    debugger
    luminaireApi.getLuminaresPage()
        .then(r => console.log(r), e => console.log(e))
}

const LaunchPanel = (props) => {
    /*const [modalShow, setModalShow] = useState(false)
    const [fullscreen, setFullscreen] = useState(true)*/

    return <ButtonGroup vertical className='my-3'>
        <Button variant='secondary' onClick={props.getIlluminance}>Расчет освещенности</Button>
        <Button variant='secondary'>Расставить светильники</Button>
        <Button variant='secondary'>Вставить светильник</Button>
        <Button variant='secondary' onClick={eap}>execAsync</Button>
    </ButtonGroup>
}

export default connect(null, { getIlluminance })(LaunchPanel)
