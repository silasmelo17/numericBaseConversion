
const baseOptions = {
    binary: {
        possibleCharacter: [ '0', '1' ],
        base: 2
    },
    octagonal: {
        possibleCharacter: [ '0', '1', '2', '3', '4', '5', '6', '7', ],
        base: 8
    },
    decimal: {
        possibleCharacter: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
        base: 10
    },
    hexadecimal: {
        possibleCharacter: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ],
        base: 16
    }
}

export function stringToArray ( text ) {
    return text.split( '' )
}

export function conversionToDecimal ( characters, baseName ) {
    const { base, possibleCharacter } = baseOptions[baseName]

    return characters.reduce( ( accumulator, value, index ) => {
        const expoent = characters.length - 1 - index;
        const correct = possibleCharacter.indexOf( value )
        const potency = correct * Math.pow( base, expoent )
        return accumulator + potency
    }, 0 )  
}

export function decimalToBase ( numberDecimal, baseName ) {
    const baseResult = convertToBase( numberDecimal, baseName )
    const correct = correctCharacters( baseResult, baseName )
    const reverse = correct.reverse()

    return reverse.reduce( ( accumulator, value ) => accumulator + value, '' )
}

function convertToBase( numberDecimal, baseName ) {
    const { base } = baseOptions[baseName]
    
    const baseResult = []
    while( true ) {
        const rest = numberDecimal % base
        numberDecimal = Math.floor( numberDecimal / base )

        baseResult.push( rest )

        if ( numberDecimal < base ) { 
            baseResult.push( numberDecimal )
            break 
        }
    }

    return baseResult
}

function correctCharacters ( array, baseName ) {
    const { possibleCharacter } = baseOptions[baseName]
    return array.map( value => possibleCharacter[value] )
}

/* 
 *  Validate user input 
 */

export function validateNumberToConvert ( userInput, baseName ) {
    const { possibleCharacter } = baseOptions[ baseName ]
  
    return  possibleCharacter.reduce( ( accumulator, value ) => {
        if ( accumulator ) return accumulator
        return value === userInput
    }, false )
}
