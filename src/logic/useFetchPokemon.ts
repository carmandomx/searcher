import { useEffect, useState } from "react";
import { IInfoPokemon, IListResults } from "../interfaces";

const URL = 'https://pokeapi.co/api/v2/pokemon';
const useFetchPokemon = () => {
    const [pokemon, setPokemon] = useState<IInfoPokemon[]>([]);

    const fetchOnlyTenPokemons = async () => {
        const req = await fetch(URL);
        const data: IListResults<IInfoPokemon>  = await req.json();

        return setPokemon(data.results.slice(0,10))    
    }

    useEffect(() => {
        fetchOnlyTenPokemons().catch(console.error);
      }, []);


    return { pokemon, fetchOnlyTenPokemons }
}

export default useFetchPokemon;