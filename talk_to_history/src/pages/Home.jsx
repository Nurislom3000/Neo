import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()
	return (
		<div className='relative min-h-screen w-full overflow-hidden font-serif'>
			<audio autoPlay loop hidden>
				<source src='/LobbyMusic.mp3' type='audio/mpeg' />
				Your browser does not support the audio element.
			</audio>
			{/* BLURRED BACKGROUND */}
			<div
				className='absolute inset-0 scale-105'
				style={{
					backgroundImage: 'url(/public/HomeBG.jpeg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					filter: 'blur(16.7px)',
				}}
			/>

			{/* DARK OVERLAY */}
			<div className='absolute inset-0 bg-black/40' />

			{/* CONTENT */}
			<div className='relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white px-6'>
				<h1 className='text-5xl md:text-7xl tracking-wide animate-fade-up'>
					Talk to History
				</h1>
				<p className='mt-6 max-w-2xl text-lg md:text-xl text-white/80 animate-fade-up delay-200'>
					History is not just dates and textbooks. It's people who once
					breathed, doubted, and made choices.{' '}
				</p>
				<br />
				Today you are speaking with{' '}
				<span className='text-white font-semibold'>Amir Temur</span>.
				<button
					onClick={() => {
						navigate('/dialog')
					}}
					className='mt-12 px-10 py-4 text-lg border border-white/60 
						hover:bg-white hover:text-black transition-all duration-500
						animate-fade-up delay-400'
				>
					Start dialogue
				</button>
				<p className='absolute bottom-8 text-sm text-white/50 animate-pulse'>
					Click when you are ready to hear the past
				</p>
			</div>
		</div>
	)
}

export default Home
