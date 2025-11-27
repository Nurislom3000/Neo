import React from 'react'
import Card from '@/components/Card'

const Time_Table = () => {
  return (
      <div className='mt-7 w-[900px]'>
      <h1 className="text-center text-2xl font-medium opacity-80 mb-4 relative w-fit mx-auto after:content-[''] after:block after:h-px after:w-full after:bg-black/20 after:mt-1">
        Lessons for Today
      </h1>

      <h2 className="border-b border-b-gray-400 text-lg opacity-70 mb-3">☀ Morning</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-7">
        <Card />
        <Card />
        <Card />
      </div>
      {/* Afternoon */}
      <h2 className="border-b border-b-gray-400 text-lg opacity-70 mb-3">🌤 Afternoon</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-7">
        <Card />
        <Card />
        <Card />
      </div>
      {/* Evening */}
      <h2 className="border-b border-b-gray-400 text-lg opacity-70 mb-3">🌙 Evening</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Time_Table