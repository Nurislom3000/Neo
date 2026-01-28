import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import choose from '/choose.svg'
import { amirDialog } from '../assets/amirDialog.js' // adjust path if needed

const Dialog = () => {
	const questionStyle =
		'flex items-center gap-5 font-normal text-[20px] text-[#fff7e8] transition-all group rounded-3xl'
	const arrowStyle =
		'transition-transform group-hover:translate-x-3 duration-400'

	// current dialog node key (start, rise_answer, etc.)
	const [currentNode, setCurrentNode] = useState('start')

	// typing animation
	const [displayedText, setDisplayedText] = useState('')
	const textBoxRef = useRef(null)
	const fullText = amirDialog[currentNode].text

	useEffect(() => {
		setDisplayedText('')
		let index = 0

		const interval = setInterval(() => {
			if (index < fullText.length) {
				setDisplayedText(fullText.slice(0, index + 1))
				index++
			} else {
				clearInterval(interval)
			}
		}, 30)

		return () => clearInterval(interval)
	}, [fullText])

	// Auto-scroll to bottom as text appears
	useEffect(() => {
		if (textBoxRef.current) {
			textBoxRef.current.scrollTop = textBoxRef.current.scrollHeight
		}
	}, [displayedText])

	return (
		<div
			className='w-screen h-screen fixed left-0 top-0 px-[3%]'
			style={{
				backgroundImage: 'url(/public/Split.png)',
				backgroundSize: 'cover',
			}}
		>
			<audio autoPlay loop hidden>
				<source src='/TemurMusic.mp3' type='audio/mpeg' />
			</audio>

			<a
				href='/'
				className='flex items-center text-white gap-2 font-semibold text-[30px] fixed left-7 top-6 cursor-pointer'
			>
				<img src='/back.svg' alt='' /> Back
			</a>

			<div className='w-full h-full flex flex-col justify-between py-[2%] items-end'>
				{/* TEXT BOX */}
				<div className='w-[70%] h-[70%] bg-[url("/Papirus.png")] bg-cover overflow-hidden p-19'>
					<div
						ref={textBoxRef}
						className='font-extrabold text-[30px] text-[#4e4a4a] text-amir'
						style={{
							height: '100%',
							overflowY: 'auto',
							scrollbarWidth: 'none',
							whiteSpace: 'pre-wrap',
							scrollBehavior: 'smooth',
						}}
					>
						{displayedText.split('').map((char, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 0.3,
									delay: index * 0.02,
									ease: 'easeOut',
								}}
								style={{ display: 'inline' }}
							>
								{char}
							</motion.span>
						))}
					</div>
				</div>

				{/* OPTIONS */}
				<div className='flex flex-col bg-[#00000098] px-2 py-4 rounded-lg w-[62%]'>
					<div className='flex flex-col h-full gap-4'>
						{amirDialog[currentNode].options.length === 0 && (
							<button
								onClick={() => setCurrentNode('start')}
								className={questionStyle}
							>
								<img src={choose} alt='' className={arrowStyle} />
								Return to main questions
							</button>
						)}

						{amirDialog[currentNode].options.map(option => (
							<button
								key={option.id}
								onClick={() => setCurrentNode(option.next)}
								className={questionStyle}
							>
								<img src={choose} alt='' className={arrowStyle} />
								{option.question}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialog
