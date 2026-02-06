import React from 'react'
import { useNavigate } from 'react-router-dom'

const Choise = ({ closing = false }) => {
	const navigate = useNavigate()
	const base =
		'fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] overflow-hidden z-50 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-xl'
	const anim = closing ? 'animate-pop-out' : 'animate-pop-in'
	return (
		<div onClick={e => e.stopPropagation()} className={`${base} ${anim}`}>
			{/* CONTENT */}
			<div className='relative h-full z-10 flex justify-center items-center text-center text-white px-3'>
				<div className='flex gap-40'>
					<button
						onClick={() => {
							navigate('/dialog')
						}}
					>
						<img
							className='w-[190px] h-[250px] rounded-2xl  duration-200 hover:scale-110'
							src='/AmirAva.png'
							alt=''
						/>
						<br />
						<p>Tamirlan</p>
					</button>
					<button
						onClick={() => {
							navigate('/mirzo')
						}}
					>
						<img
							className='w-[190px] h-[250px] rounded-2xl duration-200 hover:scale-110'
							src='/MirzoAva.png'
							alt=''
						/>
						<br />
						<p>Mirzo Ulugbek</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Choise
