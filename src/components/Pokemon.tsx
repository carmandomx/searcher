import React from "react";

type Props = {
  name: string;
  url: string;
};

const Pokemon = ({ name, url }: Props) => {
  return (
    <div>
      <h6>{name}</h6>
      <p>{url}</p>
    </div>
  );
};

export default Pokemon;
