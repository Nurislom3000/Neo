import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dialog from '../pages/Dialog.jsx'
import Home from '../pages/Home.jsx'

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/dialog' element={<Dialog />} />
		</Routes>
	)
}

export default Router
