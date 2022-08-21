import React from 'react'
import RoomContainer from './components/Room/RoomContainer'
import LuminaireContainer from './components/Luminaire/LuminaireContainer'
import Management from './components/Management'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const App = () => {

  return (
    <Container fluid='true' className='border border-success mx-0'>
      <Row>
        <Col sm={5}>
          <RoomContainer />
        </Col>
        <Col>
          <LuminaireContainer></LuminaireContainer>
          <Management></Management>
        </Col>
      </Row>
    </Container>
  )
}

export default App
