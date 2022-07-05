import React from 'react'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Room from './components/Room'
import Luminaire from './components/Luminaire'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const App = () => {

  return (
    <Container fluid='true' className='border border-success mx-0'>
      <Row>
        <Col sm={5}>
          <Room />
        </Col>
        <Col>
          <Luminaire></Luminaire>
        </Col>
      </Row>
    </Container>
  )
}

export default App
