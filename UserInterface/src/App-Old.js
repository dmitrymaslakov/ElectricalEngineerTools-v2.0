import React from 'react'

const App = () => {

  return (
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
