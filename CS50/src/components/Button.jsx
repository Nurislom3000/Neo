import React from 'react'

function Button1({ count, onTouch }) {
	return (
		<>
			<h1>{count}</h1>
			<button onClick={onTouch}>increment</button>
		</>
	)
}
function Button2({ count, onTouch }) {
	return (
		<>
			<h1>{count}</h1>
			<button onClick={onTouch}>increment</button>
		</>
	)
}
function Button3({ count, onTouch }) {
	return (
		<>
			<h1>{count}</h1>
			<button onClick={onTouch}>increment</button>
		</>
	)
}

export { Button1, Button2, Button3 }
