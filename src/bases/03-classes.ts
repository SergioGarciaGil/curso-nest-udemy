export class Pokemon {
    constructor(
        public readonly id: number,// readonly NO PERMITE CAMBIAR ID
        public name: string,

    ) { }
}

export const charmander = new Pokemon(3, 'Charmander')