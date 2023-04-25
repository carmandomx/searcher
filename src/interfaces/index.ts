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