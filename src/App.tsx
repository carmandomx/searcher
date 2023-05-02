import React from "react";
import useFetchPokemon from "./logic/useFetchPokemon";
import Pokedex from "./components/Pokedex";

import "./App.css";
import useFetchTypes from "./logic/useFetchTypes";
import useFetchPokemonsByType from "./logic/useFetchPokemonsByType";

function App() {
  const { pokemon } = useFetchPokemon();
  const { types } = useFetchTypes();
  const { selectedType, setSelectedType, pokemonByType } =
    useFetchPokemonsByType();
  const list = types.map((value) => (
    <option key={value.name} value={value.url}>
      {value.name.toUpperCase()}
    </option>
  ));
  return (
    <div className="App">
      <select
        value={selectedType}
        onChange={(ev) => {
          setSelectedType(ev.target.value);
        }}
      >
        <option value="">Select a type</option>
        {list}
      </select>
      {!selectedType ? (
        <Pokedex pokemon={pokemon} />
      ) : (
        <Pokedex pokemon={pokemonByType} />
      )}
    </div>
  );
}

export default App;
