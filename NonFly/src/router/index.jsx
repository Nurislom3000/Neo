import { Routes, Route } from 'react-router-dom'
import Time_Table from '@/pages/Time_Table'
import H_Work from '@/pages/H_Work'

const Router = () => {
  return (
    <Routes>
       <Route path="/" element={<Time_Table/>} />
       <Route path="/homework" element={<H_Work/>} />
    </Routes>
  )
}

export default Router