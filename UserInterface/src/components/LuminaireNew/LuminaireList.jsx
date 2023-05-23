import React, { useEffect, useState } from 'react'
import { luminaireService } from '../../api/luminaireService'
import { ListGroup } from 'react-bootstrap'
import Luminaire from './Luminaire'
import LuminaireDetails from './LuminaireDetails'
import Loader from '../UI/Loader/Loader'
import _ from 'lodash'
import { useFetching } from '../hooks/useFetching'

const LuminaireList = () => {
  const [luminaires, setLuminaires] = useState([])
  const [activeLum, setActiveLum] = useState({})
  const [show, setShow] = useState(false)
  //const [isLuminairesLoading, setIsLuminairesLoading] = useState(false)
  const [fetchLuminaires, isLuminairesLoading, luminaireError ] = useFetching(async() => {
    const data = await luminaireService.getLuminares()
    setLuminaires(data.Luminaires.Entities)
  })

  useEffect(() => {
    fetchLuminaires()
  }, [])

  //const fetchLuminaires = () => {
    /*luminaireService.getLuminares(
      data => setLuminaires(data.Luminaires.Entities),
      error => console.log(error))*/

    /*setIsLuminairesLoading(true)
    setTimeout(async () => {      
      await luminaireService.getLuminares(
        data => setLuminaires(data.Luminaires.Entities),
        error => console.log(error))
    }, 2000)
    setIsLuminairesLoading(false)*/
    /*setIsLuminairesLoading(true)
    setTimeout(async () => {
      const data = await luminaireService.getLuminares()
      setLuminaires(data.Luminaires.Entities)
      setIsLuminairesLoading(false)
    }, 1000)*/
  //}



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
            /*if (!checkPropDifferences(luminaireToUpdate[key], activeLum[key])) {
              return false
            }*/
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
    /*luminaireService.updateLuminare(activeLum,
      updatedLuminaire => {
        const luminaireIndex = updatedLuminaires.findIndex((lum) => lum.Id === updatedLuminaire.Id)
        if (luminaireIndex !== -1) {
          updatedLuminaires[luminaireIndex] = updatedLuminaire
          setLuminaires(updatedLuminaires)
        } else {
          console.log("Failed to find the luminaire in the array.")
        }
      },
      error => {
        console.log("Failed to update luminaire in the database:", error)
      })*/
  }

  return (
    <>
      {
        isLuminairesLoading ?
          //<h1>Идёт загрузка...</h1> :
           <Loader/> :
          // <h1>Загрузка завершена</h1>
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
      }
      {JSON.stringify(activeLum) === '{}' ?
        <></> :
        <LuminaireDetails show={show} setShow={setShow} luminaire={activeLum}
          setActiveLum={setActiveLum} updateLuminaire={updateLuminaire}
          checkPropDifferences={checkPropDifferences} />}
    </>)
}

export default LuminaireList
