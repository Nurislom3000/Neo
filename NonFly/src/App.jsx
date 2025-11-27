import React from 'react'
import Router from '@/router/index.jsx'
import B_menu from '@/components/B_menu.jsx'
import Header from '@/components/Header.jsx'

const App = () => {
  return (
    <div>
      <div>
        <Header />
        <div className='flex flex-col items-center'>
          <Router />
        </div>
        <B_menu/>
      </div>
    </div>
  )
}

export default App