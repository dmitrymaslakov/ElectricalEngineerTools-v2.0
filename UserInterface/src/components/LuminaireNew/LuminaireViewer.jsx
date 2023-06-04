import React from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Link } from 'react-router-dom'

const LuminaireViewer = ({ luminare, setLuminaire }) => {
  return <>
    <label className='fs-5'>Тип светильника {luminare.brand}</label>
    <br />
    <Link to={"luminairelist/"} state={{ setLuminaire: setLuminaire }}>
      <Button variant='secondary' className='my-3'>Выбрать светильник</Button>
    </Link>
    <br />
    <label className='fs-5 mb-3'>Лампа {luminare.lamp}</label>
    <br />
    <label className='fs-5 mb-3'>Мощность, {luminare.power} Вт</label>
    <br />
    <InputGroup>
      <InputGroup.Text>Световой поток, лм</InputGroup.Text>
      <FormControl value={luminare.luminousFlux} />
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroup.Text>Высота установки, м</InputGroup.Text>
      <FormControl value={luminare.mountingHeight} />
    </InputGroup>
  </>
}

export default LuminaireViewer