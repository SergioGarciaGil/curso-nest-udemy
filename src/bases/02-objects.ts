
export const pokemonIds = [1, 2, 45, 56,]

interface Pokemon {
    id: number
    name: string
    age?: number
}

export const bulbasour: Pokemon = {
    id: 1,
    name: 'Bulbasour',

}
export const charmander: Pokemon = {
    id: 4,
    name: "Charmander"
}
export const pokemons: Pokemon[] = [];
pokemons.push(charmander, bulbasour)

console.log(pokemons)
//ok