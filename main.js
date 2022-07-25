import './style.css'

import { setupCounter } from './counter.js'
import { charmander } from './src/bases/03-classes'
// import { pokemonIds } from '/src/bases/01-types'
document.querySelector('#app').innerHTML = `
  
    <h1>Hello ${charmander.name} ${charmander.id} </h1 >
  <div class="card">
    <button id="counter" type="button"></button>
  </div>


`

setupCounter(document.querySelector('#counter'))
