import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StartingPage from '../pages/StartingPage'
import Home from '../pages/Home.jsx'

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	)
}

export default Router
