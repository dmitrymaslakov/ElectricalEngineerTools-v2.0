import React from 'react'
import { Button } from 'react-bootstrap'

const Luminaire = ({ brand, setShow, activeLum }) => {

  return <>
    <div className='fs-5' onClick={(e) => activeLum(brand)}>{brand}</div>
    <Button onClick={(e) => {setShow(true); activeLum(brand)}}>Детали</Button>
  </>
}

export default Luminaire