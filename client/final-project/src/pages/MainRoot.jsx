import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainRoot = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default MainRoot