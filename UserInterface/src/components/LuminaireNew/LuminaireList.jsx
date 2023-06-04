import React, { useEffect, useState } from 'react'
import { luminaireService } from '../../api/luminaireService'
import { ListGroup } from 'react-bootstrap'
import LuminaireItem from './LuminaireItem'
import LuminaireDetails from './LuminaireDetails'
import Loader from '../UI/Loader/Loader'
import _ from 'lodash'
import { useFetching } from '../hooks/useFetching'
import { Link } from 'react-router-dom'

const LuminaireList = () => {
  const [luminaires, setLuminaires] = useState([])
  const [activeLum, setActiveLum] = useState({})
  const [show, setShow] = useState(false)
  const [fetchLuminaires, isLuminairesLoading, luminaireError] = useFetching(async () => {
    const data = await luminaireService.getLuminares()
    setLuminaires(data.Luminaires.Entities)
  })

  useEffect(() => {
    fetchLuminaires()
  }, [])

  const activeLumSet = (lumBrand) => {
    let lum = _.cloneDeep(luminaires.find(lum => lum.Brand === lumBrand)) || {}
    setActiveLum(lum)
  }

  const checkPropDifferences = () => {
    const luminaireToUpdate = luminaires.find(lum => lum.Id === activeLum.Id)
    const stack = [{ luminaireToUpdate, activeLum }]

    while (stack.length > 0) {
      const { luminaireToUpdate, activeLum } = stack.pop()

      for (const key in luminaireToUpdate) {
        if (luminaireToUpdate.hasOwnProperty(key)) {
          if (typeof luminaireToUpdate[key] === 'object' && activeLum[key] !== null) {
            stack.push({ luminaireToUpdate: luminaireToUpdate[key], activeLum: activeLum[key] })
          } else if (luminaireToUpdate[key] !== activeLum[key]) {
            return false
          }
        }
      }
    }
    return true
  }

  const updateLuminaire = async () => {
    //debugger
    const updatedLuminaires = _.cloneDeep(luminaires)
    const updatedLuminaire = await luminaireService.updateLuminare(activeLum)

    const luminaireIndex = updatedLuminaires.findIndex((lum) => lum.Id === updatedLuminaire.Id)
    if (luminaireIndex !== -1) {
      updatedLuminaires[luminaireIndex] = updatedLuminaire
      setLuminaires(updatedLuminaires)
    } else {
      console.log("Failed to find the luminaire in the array.")
    }
  }

  const state = () => {
    return Object.keys(activeLum).length !== 0 ?
      {
        id: activeLum.Id,
        brand: activeLum.Brand,
        lamp: activeLum.LightSourceInfo.LightSourceType,
        power: activeLum.LightSourceInfo.Power
      } :
      {}
  }

  return (
    <>
      {
        isLuminairesLoading ?
          <Loader /> :
          <ListGroup>
            {luminaires.map(l => {
              let rootClasses = ['d-flex', 'justify-content-between']
              if (activeLum.Brand === l.Brand) {
                rootClasses.push('active')
              }

              return <ListGroup.Item
                className={rootClasses.join(' ')}
                key={l.Id}>
                <LuminaireItem brand={l.Brand} setShow={setShow} activeLumSet={activeLumSet} />
              </ListGroup.Item>
            })}
          </ListGroup>
      }
      {JSON.stringify(activeLum) === '{}' ?
        <></> :
        <LuminaireDetails show={show} setShow={setShow} luminaire={activeLum}
          setActiveLum={setActiveLum} updateLuminaire={updateLuminaire}
          checkPropDifferences={checkPropDifferences} />}
      <Link to={'/'} state={state()}>Back</Link>
    </>)
}

export default LuminaireList
