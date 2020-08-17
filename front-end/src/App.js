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
      <svg className='background-curve' >
        <path d="M 1 1 L 1 0 L 0 0 L 0 1 Q 0.02 0.98 0.1 0.96 Q 0.16 0.96 0.22 0.98 Q 0.3 1 0.36 0.98 Q 0.46 0.54 0.96 Q 0.64 1 0.72 0.98 Q 0.8 0.96 0.88 0.96 Q 0.96 0.96 1 1 Z" />
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
