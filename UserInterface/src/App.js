import React, { useEffect, useState } from 'react'
import RoomContainer from './components/Room/RoomContainer'
import LuminaireContainer from './components/Luminaire/LuminaireContainer'
import LaunchPanel from './components/LaunchPanel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { luminaireService } from './api/luminaireService'
import { ListGroup } from 'react-bootstrap'
import LuminaireList from './components/LuminaireNew/LuminaireList'

const App = () => {

  return <LuminaireList/>
}

export default App
