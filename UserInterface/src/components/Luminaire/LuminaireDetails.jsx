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
    const newLightSourceType = React.createRef()
    const newPower = React.createRef()
    const newTechnicalSpecifications = React.createRef()
    const newMountingType = React.createRef()
    const newMountingSubtype = React.createRef()
    const newClimateApplication = React.createRef()
    const newDiffuserMaterial = React.createRef()
    const newIP = React.createRef()
    const newEquipmentClass = React.createRef()
    const newLength = React.createRef()
    const newWidth = React.createRef()
    const newDiameter = React.createRef()
    const newLdtIesFile = React.createRef()
    const newCableBrand = React.createRef()
    const newCoresNumber = React.createRef()
    const newSection = React.createRef()

    const onManufacturerChanged = () => {
        const manufacturer = newManufacturer.current.value
        props.onManufacturerChanged(manufacturer)
        //console.log(props.changedLuminaireParameters)
    }
    const onBrandChanged = () => {
        const brand = newBrand.current.value
        props.onBrandChanged(brand)
    }
    const onLightSourceInfoChanged = () => {
        const LightSourceType = newLightSourceType.current.value
        const Power = newPower.current.value
        props.onLightSourceInfoChanged({ LightSourceType, Power })
    }
    const onTechnicalSpecificationsChanged = () => {
        const technicalSpecifications = newTechnicalSpecifications.current.value
        props.onTechnicalSpecificationsChanged(technicalSpecifications)
    }
    const onMountingChanged = () => {
        const MountingType = newMountingType.current.value
        const MountingSubtype = newMountingSubtype.current.value
        props.onMountingChanged({ MountingType, MountingSubtype })
    }
    const onClimateApplicationChanged = () => {
        const climateApplication = newClimateApplication.current.value
        props.onClimateApplicationChanged(climateApplication)
    }
    const onDiffuserMaterialChanged = () => {
        const diffuserMaterial = newDiffuserMaterial.current.value
        props.onDiffuserMaterialChanged(diffuserMaterial)
    }
    const onIPChanged = () => {
        const ip = newIP.current.value
        props.onIPChanged(ip)
    }
    const onEquipmentClassChanged = () => {
        const equipmentClass = newEquipmentClass.current.value
        props.onEquipmentClassChanged(equipmentClass)
    }
    const onIsFireproofChanged = () => {
        const isFireproof = props.pickedLuminaire.IsFireproof ? false : true
        props.onIsFireproofChanged(isFireproof)
    }
    const onIsExplosionProofChanged = () => {
        const isExplosionProof = props.pickedLuminaire.IsExplosionProof ? false : true
        props.onIsExplosionProofChanged(isExplosionProof)
    }
    const onBPSUChanged = () => {
        const BPSU = props.pickedLuminaire.BPSU ? false : true
        props.onBPSUChanged(BPSU)
    }
    const onDimensionsChanged = () => {
        const Length = newLength.current.value
        const Width = newWidth.current.value
        const Diameter = newDiameter.current.value
        props.onDimensionsChanged({Length, Width, Diameter})
    }
    const onLdtIesFileChanged = () => {
        const ldtIesFile = newLdtIesFile.current.value
        props.onLdtIesFileChanged(ldtIesFile)
    }
    const onCableChanged = () => {
        const Brand = newCableBrand.current.value
        const CoresNumber = newCoresNumber.current.value
        const Section = newSection.current.value
        props.onCableChanged({Brand, CoresNumber, Section})
    }

    const onDetailsClose = () => {
        props.onLuminaireDetailsChanged()
        props.onHide()
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
                    <FormControl value={props.pickedLuminaire.Manufacturer} ref={newManufacturer} onChange={onManufacturerChanged} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Тип</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.Brand} ref={newBrand} onChange={onBrandChanged} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Источник света</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.LightSourceInfo === undefined ? '' : props.pickedLuminaire.LightSourceInfo.LightSourceType} ref={newLightSourceType} onChange={onLightSourceInfoChanged} />
                    <InputGroup.Text>Мощность</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.LightSourceInfo === undefined ? '' : props.pickedLuminaire.LightSourceInfo.Power} ref={newPower} onChange={onLightSourceInfoChanged} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Технические условия</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.TechnicalSpecifications} ref={newTechnicalSpecifications} onChange={onTechnicalSpecificationsChanged} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Тип монтажа</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.Mounting === undefined ? '' : props.pickedLuminaire.Mounting.MountingType} ref={newMountingType} onChange={onMountingChanged} />
                    <InputGroup.Text>Способ монтажа</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.Mounting === undefined ? '' : props.pickedLuminaire.Mounting.MountingSubtype} ref={newMountingSubtype} onChange={onMountingChanged} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Климатическое исполнение</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.ClimateApplication} ref={newClimateApplication} onChange={onClimateApplicationChanged} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Рассеиватель</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.DiffuserMaterial} ref={newDiffuserMaterial} onChange={onDiffuserMaterialChanged} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Степень защиты</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.IP} ref={newIP} onChange={onIPChanged} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Класс защиты электрооборудования</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.EquipmentClass} ref={newEquipmentClass} onChange={onEquipmentClassChanged} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Пожаробезопасный</InputGroup.Text>
                    <InputGroup.Checkbox checked={props.pickedLuminaire.IsFireproof} onChange={onIsFireproofChanged} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Взрывобезопасный</InputGroup.Text>
                    <InputGroup.Checkbox checked={props.pickedLuminaire.IsExplosionProof} onChange={onIsExplosionProofChanged} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>БАП</InputGroup.Text>
                    <InputGroup.Checkbox checked={props.pickedLuminaire.BPSU} onChange={onBPSUChanged} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Длина</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.Dimensions === undefined ? '' : props.pickedLuminaire.Dimensions.Length} ref={newLength} onChange={onDimensionsChanged} />
                    <InputGroup.Text>Ширина</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.Dimensions === undefined ? '' : props.pickedLuminaire.Dimensions.Width} ref={newWidth} onChange={onDimensionsChanged} />
                    <InputGroup.Text>Диаметр</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.Dimensions === undefined ? '' : props.pickedLuminaire.Dimensions.Diameter} ref={newDiameter} onChange={onDimensionsChanged} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Файл формата Ldt или Ies</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.LdtIesFile} ref={newLdtIesFile} onChange={onLdtIesFileChanged} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Марка кабеля</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.Cable === undefined ? '' : props.pickedLuminaire.Cable.Brand} ref={newCableBrand} onChange={onCableChanged} />
                    <InputGroup.Text>Кол-во жил</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.Cable === undefined ? '' : props.pickedLuminaire.Cable.CoresNumber} ref={newCoresNumber} onChange={onCableChanged} />
                    <InputGroup.Text>Сечение</InputGroup.Text>
                    <FormControl value={props.pickedLuminaire.Cable === undefined ? '' : props.pickedLuminaire.Cable.Section} ref={newSection} onChange={onCableChanged} />
                </InputGroup>
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onDetailsClose}>Close</Button>
        </Modal.Footer>
    </Modal>
}

export default LuminaireDetails