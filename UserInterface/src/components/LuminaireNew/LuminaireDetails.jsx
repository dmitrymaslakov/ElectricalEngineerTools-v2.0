import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import _ from 'lodash'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'

const LuminaireDetails = ({ show, setShow, luminaire, setActiveLum }) => {


    function getPropertyPath(property) {

        const paths = [];
        const stack = [{ obj: luminaire, path: '' }];

        while (stack.length > 0) {
            const { obj, path } = stack.pop();

            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const fullPath = path ? `${path}.${key}` : key;

                    if (key === property) {
                        paths.push(fullPath);
                    }

                    if (typeof obj[key] === 'object' && obj[key] !== null) {
                        if (Array.isArray(obj[key])) {
                            obj[key].forEach((item, index) => {
                                const arrayPath = `${fullPath}[${index}]`;
                                if (typeof item === 'object' && item !== null) {
                                    stack.push({ obj: item, path: arrayPath });
                                }
                            });
                        } else {
                            stack.push({ obj: obj[key], path: fullPath });
                        }
                    }
                }
            }
        }

        return paths.length > 0 ? paths[0] : null
    }


    const handlePropertyChange = (lumProp, e) => {
        const value = parseInt(e.target.value)
        setActiveLum((prevLuminaire) => ({
            ...prevLuminaire,
            Dimensions: {
                ...prevLuminaire.Dimensions,
                [lumProp]: value,
            },
        }))
    }

    const PropertyInputGroup = () => {
        return <PropertyInput
            label="Длина"
            value={luminaire.Dimensions.Length}
            onChange={(e) => changeProperty('Length', e.target.value)} />
    }


    const currentPropParent = (lumProp, newLum) => {
        const propertyPath = getPropertyPath(lumProp)
        const pathArray = propertyPath.split('.')
        const property = pathArray.pop()

        let currentObj = newLum
        for (const path of pathArray) {
            if (!currentObj[path]) {
                currentObj[path] = {}
            }
            currentObj = currentObj[path]
        }
        return currentObj
    }

    function changeProperty(lumProp, newValue) {
        //debugger
        const newLum = _.cloneDeep(luminaire)
        const currentObj = currentPropParent(lumProp, newLum)
        //currentObj[property] = newValue
        currentObj[lumProp] = newValue
        setActiveLum(newLum)
        //setActiveLum({ ...luminaire, Manufacturer: newValue })
        console.log(newLum);
    }

    const PropertyInput = (label, lumProp) => {
        const value = currentPropParent(lumProp, luminaire)[lumProp]
        const onChange = (e) => changeProperty(lumProp, e.target.value)
        return <>
            <InputGroup.Text>{label}</InputGroup.Text>
            {typeof value !== 'boolean' ?
                <FormControl value={value || ''} onChange={onChange} /> :
                <InputGroup.Checkbox checked={value} onChange={onChange} />
            }
        </>
    }

    return <Modal fullscreen={true} show={show}
        onHide={() => setShow(false)}
        aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Редактор параметров светильника
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
            <Container>
                <InputGroup>
                    {PropertyInput('Производитель', 'Manufacturer')}
                </InputGroup>
                <InputGroup>
                    {PropertyInput('Тип', 'Brand')}
                    {/* <InputGroup.Text>Тип</InputGroup.Text>
                    <FormControl
                        value={luminaire.Brand}
                        onChange={e => setActiveLum({ ...luminaire, Brand: e.target.value })} /> */}
                </InputGroup>
                <InputGroup>
                    <div>
                        {PropertyInput('Источник света', 'LightSourceType')}

                        {/* <InputGroup.Text>Источник света</InputGroup.Text>
                        <FormControl
                            value={luminaire.LightSourceInfo.LightSourceType}
                            onChange={e => setActiveLum({ ...luminaire, LightSourceInfo: { ...luminaire.LightSourceInfo, LightSourceType: e.target.value } })} /> */}
                    </div>
                    <div>
                        {PropertyInput('Мощность', 'Power')}

                        {/* <InputGroup.Text>Мощность</InputGroup.Text>
                        <FormControl
                            value={luminaire.LightSourceInfo.Power}
                            onChange={e => setActiveLum({ ...luminaire, LightSourceInfo: { ...luminaire.LightSourceInfo, Power: e.target.value } })} /> */}
                    </div>
                    <div>
                        {PropertyInput('Цоколь', 'Socle')}

                        {/* <InputGroup.Text>Цоколь</InputGroup.Text>
                        <FormControl
                            value={luminaire.LightSourceInfo.Socle || ''}
                            onChange={e => setActiveLum({ ...luminaire, LightSourceInfo: { ...luminaire.LightSourceInfo, Socle: e.target.value } })} /> */}
                    </div>
                    <div>
                        <InputGroup.Text>Кол-во ламп</InputGroup.Text>
                        <FormControl
                            value={luminaire.LightSourceInfo.LampsNumber || ''}
                            onChange={e => setActiveLum({ ...luminaire, LightSourceInfo: { ...luminaire.LightSourceInfo, LampsNumber: parseInt(e.target.value) } })} />
                    </div>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Технические условия</InputGroup.Text>
                    <FormControl
                        value={luminaire.TechnicalSpecifications}
                        onChange={e => setActiveLum({ ...luminaire, TechnicalSpecifications: e.target.value })} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Тип монтажа</InputGroup.Text>
                    <FormControl
                        value={luminaire.Mounting.MountingType}
                        onChange={e => setActiveLum({ ...luminaire, Mounting: { ...luminaire.Mounting, MountingType: e.target.value } })} />
                    <InputGroup.Text>Способ монтажа</InputGroup.Text>
                    <FormControl
                        value={luminaire.Mounting.MountingSubtype}
                        onChange={e => setActiveLum({ ...luminaire, Mounting: { ...luminaire.Mounting, MountingSubtype: e.target.value } })} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Климатическое исполнение</InputGroup.Text>
                    <FormControl
                        value={luminaire.ClimateApplication}
                        onChange={e => setActiveLum({ ...luminaire, ClimateApplication: e.target.value })} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Рассеиватель</InputGroup.Text>
                    <FormControl
                        value={luminaire.DiffuserMaterial}
                        onChange={e => setActiveLum({ ...luminaire, DiffuserMaterial: e.target.value })} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Степень защиты</InputGroup.Text>
                    <FormControl
                        value={luminaire.IP}
                        onChange={e => setActiveLum({ ...luminaire, IP: parseInt(e.target.value) })} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Класс защиты электрооборудования</InputGroup.Text>
                    <FormControl
                        value={luminaire.EquipmentClass}
                        onChange={e => setActiveLum({ ...luminaire, EquipmentClass: e.target.value })} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Пожаробезопасный</InputGroup.Text>
                    <InputGroup.Checkbox
                        checked={luminaire.IsFireproof}
                        onChange={e => setActiveLum({ ...luminaire, IsFireproof: e.target.value })} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Взрывобезопасный</InputGroup.Text>
                    <InputGroup.Checkbox
                        checked={luminaire.IsExplosionProof}
                        onChange={e => setActiveLum({ ...luminaire, IsExplosionProof: e.target.value })} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>БАП</InputGroup.Text>
                    <InputGroup.Checkbox
                        checked={luminaire.BPSU}
                        onChange={e => setActiveLum({ ...luminaire, BPSU: e.target.value })} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Длина</InputGroup.Text>
                    <FormControl
                        value={luminaire.Dimensions.Length || ''}
                        onChange={e => setActiveLum({ ...luminaire, Dimensions: { ...luminaire.Dimensions, Length: parseInt(e.target.value) } })} />
                    <InputGroup.Text>Ширина</InputGroup.Text>
                    <FormControl
                        value={luminaire.Dimensions.Width || ''}
                        onChange={e => setActiveLum({ ...luminaire, Dimensions: { ...luminaire.Dimensions, Width: parseInt(e.target.value) } })} />
                    <InputGroup.Text>Диаметр</InputGroup.Text>
                    <FormControl
                        value={luminaire.Dimensions.Diameter || ''}
                        onChange={e => setActiveLum({ ...luminaire, Dimensions: { ...luminaire.Dimensions, Diameter: parseInt(e.target.value) } })} />
                    <InputGroup.Text>Длина в DWG</InputGroup.Text>
                    <FormControl
                        value={luminaire.Dimensions.LengthOnDwg || ''}
                        onChange={e => setActiveLum({ ...luminaire, Dimensions: { ...luminaire.Dimensions, LengthOnDwg: parseInt(e.target.value) } })} />
                    <InputGroup.Text>Ширина в DWG</InputGroup.Text>
                    <FormControl
                        value={luminaire.Dimensions.WidthOnDwg || ''}
                        onChange={e => setActiveLum({ ...luminaire, Dimensions: { ...luminaire.Dimensions, WidthOnDwg: parseInt(e.target.value) } })} />
                    <InputGroup.Text>Диаметр в DWG</InputGroup.Text>
                    <FormControl
                        value={luminaire.Dimensions.DiameterOnDwg || ''}
                        onChange={e => setActiveLum({ ...luminaire, Dimensions: { ...luminaire.Dimensions, DiameterOnDwg: parseInt(e.target.value) } })} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Файл формата Ldt или Ies</InputGroup.Text>
                    <FormControl
                        value={luminaire.LdtIesFile}
                        onChange={e => setActiveLum({ ...luminaire, LdtIesFile: e.target.value })} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Марка кабеля</InputGroup.Text>
                    <FormControl
                        value={luminaire.Cable.Brand}
                        onChange={e => setActiveLum({ ...luminaire, Cable: { ...luminaire.Cable, Brand: e.target.value } })} />
                    <InputGroup.Text>Кол-во жил</InputGroup.Text>
                    <FormControl
                        value={luminaire.Cable.CoresNumber}
                        onChange={e => setActiveLum({ ...luminaire, Cable: { ...luminaire.Cable, CoresNumber: e.target.value } })} />
                    <InputGroup.Text>Сечение</InputGroup.Text>
                    <FormControl
                        value={luminaire.Cable.Section}
                        onChange={e => setActiveLum({ ...luminaire, Cable: { ...luminaire.Cable, Section: e.target.value } })} />
                </InputGroup>
            </Container>
        </Modal.Body>
    </Modal>
}

export default LuminaireDetails