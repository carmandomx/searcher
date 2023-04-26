import React from "react";
import useFetchPokemon from "./logic/useFetchPokemon";
import Pokemon from "./components/Pokemon";
import "./App.css";
import Pokedex from "./components/Pokedex";

function App() {
  const { pokemon } = useFetchPokemon();
  return (
    <div className="App">
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
