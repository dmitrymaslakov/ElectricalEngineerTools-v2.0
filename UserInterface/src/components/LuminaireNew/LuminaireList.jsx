import React, { useEffect, useState } from 'react'
import { luminaireService } from '../../api/luminaireService'
import { ListGroup } from 'react-bootstrap'
import Luminaire from './Luminaire'
import LuminaireDetails from './LuminaireDetails'
import _ from 'lodash'

const LuminaireList = () => {
  const [luminaires, setLuminaires] = useState([])
  const [activeLum, setActiveLum] = useState({})
  const [show, setShow] = useState(false)

  useEffect(() => {
    fetchLuminaires()
  }, [])

  const fetchLuminaires = () => {
    luminaireService.getLuminares(
      data => setLuminaires(data.Luminaires.Entities),
      error => console.log(error))
  }

  const activeLumSet = (lumBrand) => {
    let lum = _.cloneDeep(luminaires.find(lum => lum.Brand === lumBrand)) || {}
    setActiveLum(lum)
  }

  return (
    <>
      <ListGroup>
        {luminaires.map(l => {
          let rootClasses = ['d-flex', 'justify-content-between']
          if (activeLum.Brand === l.Brand) {
            rootClasses.push('active')
          }

          return <ListGroup.Item
            className={rootClasses.join(' ')}
            key={l.Id}>
            <Luminaire brand={l.Brand} setShow={setShow} activeLum={activeLumSet} />
          </ListGroup.Item>
        })}
      </ListGroup>
      {JSON.stringify(activeLum) === '{}' ?
        <></> :
        <LuminaireDetails show={show} setShow={setShow}
          luminaire={activeLum} setActiveLum={setActiveLum} />}
    </>)
}

export default LuminaireList
