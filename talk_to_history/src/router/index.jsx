import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StartingPage from '../pages/StartingPage'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<StartingPage/>} />
    </Routes>
  )
}

export default Router