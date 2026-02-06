import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dialog from '../pages/Dialog.jsx'
import Home from '../pages/Home.jsx'
import Mirzo from '../pages/Mirzo.jsx'
import Choise from '../pages/Choise.jsx'

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/dialog' element={<Dialog />} />
			<Route path='/mirzo' element={<Mirzo />} />
		</Routes>
	)
}

export default Router
