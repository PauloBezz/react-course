import React, { useState } from "react";
import axios from "axios";
import Navbar from "../styles/css-modules/components/NavBar";

export default function GetCep() {
  const [cep, setCep] = useState(null);
  const [address, setAddress] = useState(null);

  async function handleAddress() {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data);
    } catch (error) {
      alert( 'Digite um CEP válido... ');
      setCep(address)
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

      <section className="flex w-full h-screen items-center justify-around flex-wrap">
        <article className="flex flex-col items-center justify-center gap-y-4">
          <h1 className="text text-2xl text-blue-600">Busque seu CEP aqui</h1>
          <input
            type="number"
            name=""
            id=""
            className="border-blue-200 border-2 w-52 rounded"
            onChange={(e) => setCep(e.target.value)}
          />
          <button
            type="button"
            onClick={handleAddress}
            className="flex items-center justify-center px-6 py-2
             bg-black text-white rounded hover:bg-gray-500 hover:text-black"
          >
            Buscar
          </button>
        </article>

        {address && (
          <aside className="flex items-center ">
            <div className="flex flex-col gap-y-2">
              <p>DDD: {address.ddd}</p>
              <p>Cidade: {address.localidade}</p>
              <p>Bairro: {address.bairro}</p>
              <p>{address.logradouro}</p>
            </div>
          </aside>
        )}
      </section>
    </>
  );
}
