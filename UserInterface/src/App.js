import React, { useEffect, useState } from 'react'
import Room from './components/RoomNew/Room'
import LuminaireContainer from './components/Luminaire/LuminaireContainer'
import LaunchPanel from './components/LaunchPanel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { luminaireService } from './api/luminaireService'
import { ListGroup } from 'react-bootstrap'
import LuminaireList from './components/LuminaireNew/LuminaireList'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Home from './pages/Home'
import { Link } from "react-router-dom"
import { router } from './components/router/router'

const App = () => {
  
  return <RouterProvider router={router} />
}

export default App
