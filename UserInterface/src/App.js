import React from 'react'
import RoomContainer from './components/Room/RoomContainer'
import LuminaireContainer from './components/Luminaire/LuminaireContainer'
import Management from './components/Management'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const App = () => {

  return (
    <Container fluid='true' className='bg-info'>
      <Row>
        <Col xs={1} className='bg-primary'>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col className='bg-secondary'>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    /*<Container fluid='true' className='border border-success mx-0 bg-info'>
      <Row>
        <Col sm={5}>
          <RoomContainer />
        </Col>
        <Col>
          <LuminaireContainer></LuminaireContainer>
          <Management></Management>
        </Col>
      </Row>
    </Container>*/
  )
}

export default App
