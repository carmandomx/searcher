import React from "react";
import useFetchPokemonDetails from "../logic/useFetchPokemonDetails";

type Props = {
  name: string;
  url: string;
};

const Pokemon = ({ name, url }: Props) => {
  const { order, sprite, types } = useFetchPokemonDetails(url);
  return (
    <div
      style={{
        width: 250,
        height: 200,
        backgroundColor: "#ccc",
      }}
    >
      <h5>{name}</h5>
      <div>
        <h6>No. {order}</h6>
        <img alt={name} src={sprite} />
        <ul>
          {types.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pokemon;
