import React, { useState } from 'react';

import './global.css'

function App() {
  const [ error, setError ] = useState('')
  const [ result, setResult ] = useState('')

  return (
    <>
      <svg viewBox=' 0, 0, 1600, 450' className='background-curve' >
        <path d="M 0 0 L 1600 0 L 1600 450 Q 1270 140 820 280 Q 410 450 0 290 Z" />
      </svg>

      <h1 className='title'>Conversão de bases</h1>
      <section className='container' >
        <form>
          <p>{error}</p>

          <section className='row'>
            <select>
              <option selected >Binário</option>
              <option>Octagonal</option>
              <option>Decimal</option>
              <option>Hexadecimal</option>
              <option>ASCII</option>
            </select>

            <span>PARA</span>

            <select>
              <option>Binário</option>
              <option>Octagonal</option>
              <option selected >Decimal</option>
              <option>Hexadecimal</option>
              <option>ASCII</option>
            </select>
          </section> 

          <textarea rows={5} ></textarea>
          <p>{result}</p>
          <input type='button' value='convert' />  
        </form>
      </section>
    </>
  )
}

export default App;
