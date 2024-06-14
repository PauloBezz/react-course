import axios from "axios";
import React, { useState } from "react";

export default function GetPokemon() {
  const [pokedex, setPokedex] = useState(null);
  const [pokemon, setPokemon] = useState(null);

  async function handlePokemon() {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      setPokedex(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">Procure seu pokemon</h1>
      <input type="text" onChange={(e) => setPokemon(e.target.value)} />
      <button
        className="flex items-center justify-center p-2 border-2 rounded border-black"
        onClick={handlePokemon}
      >
        Buscar
      </button>
      {pokedex && (
        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className="uppercase">{pokedex.name}</p>
          <img
            className="w-40 h-40 border-2 border-green-500 shadow-2xl shadow-green-500 rounded"
            src={pokedex.sprites.front_default}
            alt="Pokemon"
          />
        </div>
      )}
    </div>
  );
}
