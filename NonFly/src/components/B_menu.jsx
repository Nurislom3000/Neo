import { ArrowLeft, ArrowRight, BookType, School } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const B_menu = () => {
	const buttonStyle =
		'p-2 rounded-lg bg-[#D1CFC0] text-[#2C2C2A] hover:bg-[#b3b1a2] hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-xl px-4 py-2 flex gap-2 font-bold'

	const arrowSyle =
		'bg-[#2C2C2A] p-3 rounded-2xl  flex justify-center items-center hover:scale-105 hover:shadow-xl transition-all duration-300'

	return (
		<div className='fixed bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-5'>
			<button className={arrowSyle}>
				<ArrowLeft color='#D1CFC0' />
			</button>
			<div className='flex gap-3 py-3 px-6 mb-2 rounded-2xl bg-[#2C2C2A] text-[#D1CFC0]'>
				<NavLink to='/' className={buttonStyle}>
					<School /> Lessons
				</NavLink>
				<NavLink to='/homework' className={buttonStyle}>
					<BookType /> Homework
				</NavLink>
			</div>
			<button className={arrowSyle}>
				<ArrowRight color='#D1CFC0' />
			</button>
		</div>
	)
}

export default B_menu
