import { useState } from 'react'
import { Button1, Button2, Button3 } from './components/button'

export default function App() {
	const [count, setCount] = useState(0)
	function addCount() {
		setCount(count + 1)
	}
	return (
		<div>
			{Button1(count, addCount) == Button2(count, addCount) ? (
				<>
					<Button2 count={count} onTouch={addCount} />
					<Button3 count={count} onTouch={addCount} />
					<Button1 count={count} onTouch={addCount} />
				</>
			) : (
				<h1>Hello</h1>
			)}
		</div>
	)
}
