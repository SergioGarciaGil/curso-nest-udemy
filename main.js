import './style.css'

import { setupCounter } from './counter.js'
import { pokemons } from './src/bases/02.objects'
// import { pokemonIds } from '/src/bases/01-types'
document.querySelector('#app').innerHTML = `
  
    <h1>Hello ${pokemons.join(',')}</h1 >
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
   

  `

setupCounter(document.querySelector('#counter'))
