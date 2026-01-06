import React from 'react'
import SubjectCard from '@/components/SubjectCard'
import { subjectsTimetable, time } from '@/assets/subjectsTaimetable.js'


const Time_Table = () => {
	const today = new Date()
	const dayName = today.toLocaleDateString('en-US', { weekday: 'long' })
	const todaySubjects = subjectsTimetable[dayName.toLowerCase()]

	// Handle weekends
	if (!todaySubjects) {
		return (
			<div className='mt-7 w-[900px]'>
				<h1 className='text-center text-2xl font-medium opacity-80 mb-4'>
					No lessons today - it's the weekend! 🎉
				</h1>
			</div>
		)
	}

	console.log(todaySubjects)
	const morining = todaySubjects.slice(0, 3)
	const lateMorning = todaySubjects.slice(3, 6)
	const afternoon = todaySubjects.slice(6, 8)

	return (
		<div className='mt-7 w-[900px]'>
			<h1 className="text-center text-2xl font-medium opacity-80 mb-4 relative w-fit mx-auto after:content-[''] after:block after:h-px after:w-full after:bg-black/20 after:mt-1">
				Lessons for Today
			</h1>

			<h2 className='border-b border-b-gray-400 text-lg opacity-70 mb-3'>
				☀ Morning
			</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-7'>
				{morining.map((subject, index) => (
					<SubjectCard key={index} subjectString={subject} time={time[index]} />
				))}
			</div>
			{/* Afternoon */}
			<h2 className='border-b border-b-gray-400 text-lg opacity-70 mb-3'>
				🌤 Afternoon
			</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-7'>
				{lateMorning.map((subject, index) => (
					<SubjectCard key={index} subjectString={subject} time={time[index]} />
				))}
			</div>
			{/* Evening */}
			<h2 className='border-b border-b-gray-400 text-lg opacity-70 mb-3'>
				🌙 Evening
			</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
				{afternoon.map((subject, index) => (
					<SubjectCard key={index} subjectString={subject} time={time[index]} />
				))}
			</div>
		</div>
	)
}

export default Time_Table
