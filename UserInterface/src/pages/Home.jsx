import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import { Col, Container, Row } from 'react-bootstrap'
import Room from '../components/RoomNew/Room'
import LuminaireList from '../components/LuminaireNew/LuminaireList'
import LuminaireViewer from '../components/LuminaireNew/LuminaireViewer'
import LaunchPanelNew from '../components/LaunchPanelNew'
import { luminaireService } from '../api/luminaireService'

const Home = () => {
  const [room, setRoom] = useState({
    length: 0.0,
    width: 0.0,
    area: 0.0,
    illuminance: 0.0,
    safetyFactor: 1.2,
    numberAlongX: 0,
    numberAlongY: 0,
    workingSurfaceHeight: 0.8,
    mountingHeight: 0.0,
    PcPwPwsList: ['70-50-30', '70-50-10', '50-30-10'],
    PcPwPws: '70-50-30'
  })
  const [luminaire, setLuminaire] = useState({
    id: -1,
    brand: 'brand',
    lamp: 'lamp',
    power: 'power',
    luminousFlux: 1000,
    mountingHeight: 2.5
  })
  useEffect(() => setRoom({ ...room, area: room.length * room.width }), [room.length, room.width])
  const calculateIlluminance = () => {
    const roomData = {
      LuminaireId: luminaire.id,
      LuminousFlux: luminaire.luminousFlux,
      SafetyFactor: room.safetyFactor,
      Area: room.area,
      NumberAlongX: room.numberAlongX,
      NumberAlongY: room.numberAlongY,
      WorkingSurfaceHeight: room.workingSurfaceHeight,
      MountingHeight: luminaire.mountingHeight,
      PcPwPws: room.PcPwPws,
      Length: room.length,
      Width: room.width
    }
    console.log(roomData);
    // luminaireService.calculateIlluminance(roomData)
    //   .then(illuminance => setIlluminance(illuminance))
  }

  const setIlluminance = (newIlluminance) => {
    setRoom({ ...room, illuminance: newIlluminance })
  }
  const locationState = useLocation().state

  useEffect(() => {
    if (locationState) {
      const { id, brand, lamp, power } = locationState
      setLuminaire({ ...luminaire, id: id, brand: brand, lamp: lamp, power: power })
    }
  }, [])

  return <>
    <Container fluid='true' className='border border-success mx-0 bg-info'>
      <Row>
        <Col sm={5}>
          <Room room={room} setRoom={setRoom} />
        </Col>
        <Col>
          <LuminaireViewer luminare={luminaire} setLuminaire={setLuminaire} />
          <LaunchPanelNew calculateIlluminance={calculateIlluminance} />
        </Col>
      </Row>
    </Container>

  </>
  /*return <>
      <div>Hello world!</div>
      <Link to={"Dmitry/"}><Button>Link</Button></Link>
      
  </>*/
}
export default Home
