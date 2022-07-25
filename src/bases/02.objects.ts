
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
console.log(bulbasour)
//ok