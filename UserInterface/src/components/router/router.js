import React, { useEffect, useState } from 'react'
import Home from '../../pages/Home'
import { Link, createBrowserRouter } from 'react-router-dom'
import LuminaireList from '../LuminaireNew/LuminaireList'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "luminairelist/",
    //   element: <Link to={"/"}>Back</Link>,
      element: <LuminaireList/>,
    }
  ])
