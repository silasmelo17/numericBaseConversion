import React, { useState, useEffect } from 'react';
import { stringToArray, conversionToDecimal, decimalToBase, validateNumberToConvert } from './conversion'

import './global.css'
import './responsive.css'

function App() {
  const [ result, setResult ] = useState('')
  const [ fromBase, setFromBase ] = useState('binary')
  const [ toBase, setToBase ] = useState( 'decimal' )
  const [ userInput, setUserInput ] = useState('')

  function handleValidateUserInput ( event ) {
    const isPermitted = validateNumberToConvert( event.key, fromBase )
    if ( !isPermitted )
      event.preventDefault()
  }

  function handleConversion () {
    const inputCharacters = stringToArray( userInput )
    const decimal = conversionToDecimal( inputCharacters, fromBase )
    const numberConverted = decimalToBase( decimal, toBase )

    setResult( numberConverted )
  }

  return (
    <>
      <svg width="1600" height="450" className='background-curve' >
        <path d="M 0 0 L 1600 0 L 1600 450 Q 1270 140 820 280 Q 410 450 0 290 Z" />
      </svg>

      <h1 className='title'>Conversão de bases</h1>
      <section className='container' >
        <form>

          <section className='row'>
            <select 
              defaultValue={fromBase}
              onChange={ event => setFromBase( event.target.value ) } 
            >
              <option value='binary' >Binário</option>
              <option value='octagonal' >Octagonal</option>
              <option value='decimal' >Decimal</option>
              <option value='hexadecimal' >Hexadecimal</option>
            </select>

            <span>PARA</span>

            <select 
              defaultValue={toBase}
              onChange={ event => setToBase( event.target.value ) } 
            >
              <option value='binary' >Binário</option>
              <option value='octagonal' >Octagonal</option>
              <option value='decimal' >Decimal</option>
              <option value='hexadecimal' >Hexadecimal</option>
            </select>
          </section> 

          <textarea 
            rows={5}
            value={userInput}
            onChange={ event => setUserInput( event.target.value ) } 
            onKeyPress={ handleValidateUserInput }
          ></textarea>
          
          <p>{result}</p>
          
          <input 
            type='button' 
            value='convert' 
            onClick={handleConversion} 
          />  
        </form>
      </section>
    </>
  )
}

export default App;
