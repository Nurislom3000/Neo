'use strict'

const obj1 = {
	id: 12,
	pasport: {
		name: 'Bob',
		surname: 'Ewel',
	},
}

const obj2 = structuredClone(obj1)

console.log(obj2)

obj2.name = 'May'

console.log(obj1)
