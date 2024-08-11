import axios from "axios";
import React, { useState } from "react";
import Navbar from "../../../styles/css-modules/components/NavBar";

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
      alert("Você precisa escrever o nome do pokémon");
    }
  }

  return (
    <>
      <Navbar
        one="Teams"
        two="Cep"
        three="Pokemon"
        four="About"
        five="More"
        buttonOne="Sing up"
        buttonTwo="Login"
      />

      <article className="flex w-full h-screen flex-col items-center mt-10 text-center">
        <h1 className="text-2xl mb-20">Esse espaço é uma Pokedex, então comece sua jornada aqui!</h1>
        <section className="flex flex-wrap flex-col-reverse gap-y-2 items-center bg-red-200 rounded">
          <h1 className="text-xl mb-4">Procure seu pokémon</h1>

          <div className="flex w-fit gap-4 flex-wrap justify-around">
            <input type="text" className="w-56 border-black border-2 rounded pl-1" onChange={(e) => setPokemon(e.target.value)} />
            <button
              className="flex bg-green-200 self-end justify-center p-2 border-2 rounded border-black font-bold px-10"
              onClick={handlePokemon}
            >
              Buscar
            </button>
          </div>
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
        </section>
      </article>
    </>
  );
}
