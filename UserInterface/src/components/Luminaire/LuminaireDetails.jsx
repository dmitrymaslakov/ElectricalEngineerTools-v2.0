import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'

const LuminaireDetails = (props) => {
    const newManufacturer = React.createRef()
    const newBrand = React.createRef()
    const newLightSourceInfo = React.createRef()
    const newTechnicalSpecifications = React.createRef()
    const newMounting = React.createRef()
    const newClimateApplication = React.createRef()
    const newDiffuserMaterial = React.createRef()
    const newIP = React.createRef()
    const newEquipmentClass = React.createRef()
    const newIsFireproof = React.createRef()
    const newIsExplosionProof = React.createRef()
    const newBPSU = React.createRef()
    const newDimensions = React.createRef()
    const newLdtIesFile = React.createRef()
    const newCable = React.createRef()

    const onManufacturerChange = () => {
        const manufacturer = newManufacturer.current.value
        props.onManufacturerChange(manufacturer)
    }

    return <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Редактор параметров светильника
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
            <Container>
                <InputGroup>
                    <InputGroup.Text>Производитель</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.Manufacturer} ref={newManufacturer} onChange={onManufacturerChange} />
                </InputGroup>
                <br />
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
}

export default LuminaireDetails