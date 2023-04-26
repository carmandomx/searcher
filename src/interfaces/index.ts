export interface IInfoPokemon {
    name: string;
    url: string;
}

export interface IListResults<T> {
    count: number;
    next: string;
    previous: null
    results: T[]
}

interface IPokeType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface IPokemonDetails {
    order: number;
    sprites: {
        front_default: string;
    }
    types: IPokeType[]
}