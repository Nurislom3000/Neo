import React from 'react'
import homework from '@/assets/homework'
import axios from 'axios'

const HomeworkCard = () => {
	async function homeworks() {
		await axios
			.get('https://7b1634c46a2406cd.mokky.dev/homweorks')
			.then(res => {
				setHW(res.data)
			})
	}

	const [HW, setHW] = React.useState(homework() | null)

	return (
		<div>
			{HW.map(hw => (
				<>
					<span>{hw}</span>
				</>
			))}
		</div>
	)
}

export default HomeworkCard
