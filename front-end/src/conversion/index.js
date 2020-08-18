
const permitted = '0123456789ABCDEF'

const getDecimal = (text, from) => text.split('').reverse()
	.map( value => permitted.indexOf(value) )
	.reduce( (acc, value, index ) => acc + Math.pow( from, index ) * value, 0)

export const convertToBase = ( text, from, to ) =>
	getDecimal( text.toUpperCase(),from)
		.toString(to).toUpperCase()

export function validateInput ( text, base ) {
	const index = permitted.indexOf(text.toUpperCase())
	return index < base && index >= 0
}
