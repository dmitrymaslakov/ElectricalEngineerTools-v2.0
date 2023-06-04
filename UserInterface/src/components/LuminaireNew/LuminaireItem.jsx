import React from 'react'
import { Button } from 'react-bootstrap'

const LuminaireItem = ({ brand, setShow, activeLumSet }) => {

  return <>
    <div className='fs-5' onClick={(e) => activeLumSet(brand)}>{brand}</div>
    <Button onClick={(e) => {setShow(true); activeLumSet(brand)}}>Детали</Button>
  </>
}

export default LuminaireItem