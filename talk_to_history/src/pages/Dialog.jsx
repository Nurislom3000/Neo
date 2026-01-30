import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import choose from '/choose.svg'
import { amirDialog } from '../assets/amirDialog.js' // adjust path if needed
// bg-[#00000098]
const Dialog = () => {
	const questionStyle =
		'flex w-full items-center justify-start gap-7 text-left font-normal text-[20px] text-[#fff7e8] transition-all group rounded-3xl'
	const arrowStyle =
		'transition-transform group-hover:translate-x-3 duration-400'
	const MotionSpan = motion.span

	// current dialog node key (start, rise_answer, etc.)
	const [currentNode, setCurrentNode] = useState('start')
	const [playedAudioNodes, setPlayedAudioNodes] = useState(new Set())

	// typing animation
	const [displayedText, setDisplayedText] = useState('')
	const textBoxRef = useRef(null)
	const dialogAudioRef = useRef(null)
	const backgroundMusicRef = useRef(null)
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
		}, 70)

		return () => clearInterval(interval)
	}, [fullText])

	// Play audio for current node if it has one
	useEffect(() => {
		if (
			amirDialog[currentNode].audio &&
			!playedAudioNodes.has(currentNode) &&
			dialogAudioRef.current
		) {
			dialogAudioRef.current.src = amirDialog[currentNode].audio
			dialogAudioRef.current.currentTime = 0
			dialogAudioRef.current.play()
			setPlayedAudioNodes(prev => new Set(prev).add(currentNode))
		}
	}, [currentNode, playedAudioNodes])

	// Auto-scroll to bottom as text appears
	useEffect(() => {
		if (textBoxRef.current) {
			textBoxRef.current.scrollTop = textBoxRef.current.scrollHeight
		}
	}, [displayedText])

	// Set background music volume and dialog audio volume
	useEffect(() => {
		if (backgroundMusicRef.current) {
			backgroundMusicRef.current.volume = 0.1
		}
		if (dialogAudioRef.current) {
			dialogAudioRef.current.volume = 1.0
		}
	}, [])

	return (
		<div
			className='w-screen h-screen fixed left-0 top-0 px-[3%]'
			style={{
				backgroundImage: 'url(/public/Split.jpg)',
				backgroundSize: 'cover',
			}}
		>
			<audio autoPlay loop hidden ref={backgroundMusicRef}>
				<source src='/TemurMusic.mp3' type='audio/mpeg' />
			</audio>

			<audio ref={dialogAudioRef} />

			<a
				href='/'
				className='flex items-center text-white gap-2 font-semibold text-[30px] fixed left-7 top-6 cursor-pointer'
			>
				<img src='/back.svg' alt='' /> Back
			</a>

			<div className='w-full h-full flex flex-col justify-end pb-[3%] items-end'>
				{/* TEXT BOX */}
				<div  className='w-[51%] h-[80%] px-20 py-23 bg-[url("/Papirus.png")] bg-no-repeat bg-center'
  style={{
    backgroundSize: '100% 100%',
  }}>

					<div
						ref={textBoxRef}
						className='font-extrabold text-[30px] text-[#000] text-amir'
						style={{
							height: '100%',
							overflowY: 'auto',
							scrollbarWidth: 'none',
							whiteSpace: 'pre-wrap',
							scrollBehavior: 'smooth',
						}}
					>
						{displayedText.split('').map((char, index) => (
							<MotionSpan
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 0.25,
									delay: 0,
									ease: 'easeOut',
								}}
								style={{ display: 'inline' }}
							>
								{char}
							</MotionSpan>
						))}
					</div>
				</div>

				{/* OPTIONS */}
				<div className='flex flex-col rounded-lg w-[50%]'>
					<div className='flex flex-col items-start h-full gap-2'>
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
