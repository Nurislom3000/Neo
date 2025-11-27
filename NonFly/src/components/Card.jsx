import React from 'react'

const Card = () => {
  return (
    <div className="p-4 w-full rounded-xl bg-[#383837] text-[#FEF2E3] shadow-lg">
      {/* Lesson Name */}
      <h2 className="text-xl font-semibold mb-2">Mathematics</h2>

      {/* Time */}
      <p className="text-sm opacity-80 mb-1">
        ⏰ Starts at: <span className="font-medium">09:40</span>
      </p>

      {/* Homework */}
      <p className="text-sm mb-3">
        📚 Homework: Solve exercises 5–10 from page 34.
      </p>

      {/* Status */}
      <span className="text-xs bg-green-600 px-2 py-1 rounded-lg">
        ✔ Done
      </span>
    </div>
  )
}

export default Card
