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

const LuminaireDetails = (props) => {

  const { show, setShow, luminaire, setActiveLum, updateLuminaire, checkPropDifferences } = props

  const inputsData = [
    { Id: 1, label: 'Производитель', propName: 'Manufacturer' },
    { Id: 2, label: 'Тип', propName: 'Brand' },
    [{ Id: 3, label: 'Источник света', propName: 'LightSourceType' },
    { Id: 4, label: 'Мощность', propName: 'Power' },
    { Id: 5, label: 'Цоколь', propName: 'Socle' },
    { Id: 6, label: 'Кол-во ламп', propName: 'LampsNumber' }],
    { Id: 7, label: 'Технические условия', propName: 'TechnicalSpecifications' },
    { Id: 8, label: 'Тип монтажа', propName: 'MountingType' },
    { Id: 9, label: 'Способ монтажа', propName: 'MountingSubtype' },
    { Id: 10, label: 'Климатическое исполнение', propName: 'ClimateApplication' },
    { Id: 11, label: 'Рассеиватель', propName: 'DiffuserMaterial' },
    { Id: 12, label: 'Степень защиты', propName: 'IP' },
    { Id: 13, label: 'Класс защиты электрооборудования', propName: 'EquipmentClass' },
    { Id: 14, label: 'Пожаробезопасный', propName: 'IsFireproof' },
    { Id: 15, label: 'Взрывобезопасный', propName: 'IsExplosionProof' },
    { Id: 16, label: 'БАП', propName: 'BPSU' },
    [{ Id: 17, label: 'Длина', propName: 'Length' },
    { Id: 18, label: 'Ширина', propName: 'Width' },
    { Id: 19, label: 'Диаметр', propName: 'Diameter' },
    { Id: 20, label: 'Длина в DWG', propName: 'LengthOnDwg' },
    { Id: 21, label: 'Ширина в DWG', propName: 'WidthOnDwg' },
    { Id: 22, label: 'Диаметр в DWG', propName: 'DiameterOnDwg' }],
    { Id: 23, label: 'Файл формата Ldt или Ies', propName: 'LdtIesFile' },
    [{ Id: 24, label: 'Марка кабеля', propName: 'Cable.Brand' },
    { Id: 25, label: 'Кол-во жил', propName: 'CoresNumber' },
    { Id: 26, label: 'Сечение', propName: 'Section' }]
  ]

  const [showConfirm, setShowConfirm] = useState(false)

  const handleCloseConfirm = () => setShowConfirm(false)
  const handleShowConfirm = () => setShowConfirm(true)
  const handleCloseDetails = () => setShow(false)
  const handleShowDetails = () => setShow(true)

  const getPropertyPath = (property) => {
    const paths = []
    const stack = [{ obj: luminaire, path: '' }]

    while (stack.length > 0) {
      const { obj, path } = stack.pop()

      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          const fullPath = path ? `${path}.${key}` : key

          if (key === property) {
            paths.push(fullPath)
          }

          if (typeof obj[key] === 'object' && obj[key] !== null) {
            if (Array.isArray(obj[key])) {
              obj[key].forEach((item, index) => {
                const arrayPath = `${fullPath}[${index}]`
                if (typeof item === 'object' && item !== null) {
                  stack.push({ obj: item, path: arrayPath })
                }
              })
            } else {
              stack.push({ obj: obj[key], path: fullPath })
            }
          }
        }
      }
    }

    return paths.length > 0 ? paths[0] : null
  }

  const currentPropParent = (lumProp, newLum) => {
    //debugger
    const propertyPath = lumProp.split('.').length > 1 ? lumProp :
      getPropertyPath(lumProp)
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

  const changeProperty = (lumProp, newValue) => {
    //debugger
    const newLum = _.cloneDeep(luminaire)
    const currentObj = currentPropParent(lumProp, newLum)
    currentObj[lumProp.split('.').pop()] = newValue
    setActiveLum(newLum)
  }

  const convertValue = (value, targetType) => {
    //debugger
    switch (targetType) {
      case 'number':
        value = parseInt(value)
        break
      case 'boolean':
        value = value ? false : true
        break
      default:
        break
    }
    return value
  }

  const PropInput = (label, lumProp) => {
    //debugger
    const value = currentPropParent(lumProp, luminaire)[lumProp.split('.').pop()]

    const typeOfValue = typeof value
    const onChange = e => {

      let newValue = typeOfValue === 'boolean' ?
        convertValue(value, typeOfValue) :
        convertValue(e.target.value, typeOfValue)

      changeProperty(lumProp, newValue)
    }
    return <>
      <InputGroup.Text>{label}</InputGroup.Text>
      {typeof value !== 'boolean' ?
        <FormControl value={value || ''} onChange={onChange} /> :
        <InputGroup.Checkbox checked={value} onChange={onChange} />
      }
    </>
  }

  const PropInputGroup = () => {
    return inputsData.map((input, i) => {
      return Array.isArray(input) ?
        <InputGroup key={i}>
          {input.map(inp => PropInput(inp.label, inp.propName))}
        </InputGroup> :
        <InputGroup key={i}>
          {PropInput(input.label, input.propName)}
        </InputGroup>
    })
  }

  return <>
    <Modal fullscreen={true} show={show}
      onHide={() => { !checkPropDifferences() ? handleShowConfirm() : handleCloseDetails() }}
      aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Редактор параметров светильника
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
        <Container>
          {PropInputGroup()}
        </Container>
      </Modal.Body>
    </Modal>
    <Modal show={showConfirm} onHide={handleCloseConfirm}>
      <Modal.Header closeButton>
        <Modal.Title>Подтвердите изменения</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="secondary"
          onClick={() => { handleCloseConfirm(); handleCloseDetails() }}>
          Отменить изменения
        </Button>
        <Button variant="primary"
          onClick={() => { updateLuminaire(); handleCloseConfirm(); handleCloseDetails() }}>
          Сохранить изменения
        </Button>
      </Modal.Body>
    </Modal>
  </>
}

export default LuminaireDetails