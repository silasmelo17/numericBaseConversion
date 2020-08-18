import React, { useState, useEffect } from 'react';
import { validateInput, convertToBase } from './conversion'

import './global.css'
import './responsive.css'

function App() {
  const [ result, setResult ] = useState('')
  const [ fromBase, setFromBase ] = useState(2)
  const [ toBase, setToBase ] = useState(10)
  const [ userInput, setUserInput ] = useState('')

  function handleValidateUserInput ( event ) {
    const isPermitted = validateInput(event.key, fromBase)
    if(!isPermitted)
      event.preventDefault()
  }

  function handleConversion () {
    const convert = convertToBase( userInput, fromBase, toBase )
    setResult(convert)
  }

  const handleChangeOption = setValue => event => {
    setUserInput('')
    setValue( event.target.value )
  }

  const BaseSelect = ({ value, setValue }) => (
    <select 
      defaultValue={value}
      onChange={handleChangeOption(setValue)} 
    >
      <option value={2} >Binário</option>
      <option value={8} >Octagonal</option>
      <option value={10} >Decimal</option>
      <option value={16} >Hexadecimal</option>
    </select>
  )

  const CreateCurve = () => (
    <svg class='curve'>
      <defs>
        <clipPath id='curve' clipPathUnits="objectBoundingBox" >
          <path d='M 1 0 L 0 0 L 0 0.5 Q .15 .45 .3 .475 Q .45 .5 .55 .475 Q .7 .45 .8 .475 Q .9 .5 1 .5 Z' />
        </clipPath>
      </defs>
    </svg>
  )

  return (<>
    <CreateCurve />

    <h1 className='title'>Conversão de bases</h1>
    <section className='container' >
      <form>

        <section className='row'>
          <BaseSelect value={fromBase} setValue={setFromBase} />
          <span>PARA</span>
          <BaseSelect value={toBase} setValue={setToBase} />
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
  </>)
}

export default App;
