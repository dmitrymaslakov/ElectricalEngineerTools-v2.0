import React from 'react'
import RoomContainer from './components/Room/RoomContainer'
import LuminaireContainer from './components/Luminaire/LuminaireContainer'
import LaunchPanel from './components/LaunchPanel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const App = () => {

  return (
    /*<Container fluid className='bg-info'>
      <Row>
        <Col className='bg-primary'>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col xs={1} className='bg-secondary'>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col className='bg-light'>3 of 3</Col>
      </Row>
    </Container>*/
    <Container fluid='true' className='border border-success mx-0 bg-info'>
      <Row>
        <Col sm={5}>
          <RoomContainer />
        </Col>
        <Col>
          <LuminaireContainer></LuminaireContainer>
          <LaunchPanel></LaunchPanel>
        </Col>
      </Row>
    </Container>
  )
}

export default App
