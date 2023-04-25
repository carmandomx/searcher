import React from "react";
import useFetchPokemon from "./logic/useFetchPokemon";
import Pokemon from "./components/Pokemon";
import "./App.css";

function App() {
  const { pokemon } = useFetchPokemon();

  const list = pokemon.map((value) => (
    <Pokemon name={value.name} url={value.url} key={value.name} />
  ));

  return <div className="App">{list}</div>;
}

export default App;
