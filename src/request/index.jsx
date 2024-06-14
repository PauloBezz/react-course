import React, { useState } from "react";
import axios from "axios";

export default function GetCep() {
  const [cep, setCep] = useState(null);
  const [address, setAddress] = useState(null);

  console.log(cep, "cep");
  console.log(address, "address");

  async function handleAddress() {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h1 className="text text-4xl text-blue-600">Busque seu CEP aqui</h1>
        <input
          type="number"
          name=""
          id=""
          className="border-black border-2 rounded-sm"
          onChange={(e) => setCep(e.target.value)}
        />
        <button
          type="button"
          onClick={handleAddress}
          className="flex items-center justify-center p-2 bg-black text-white rounded-sm hover:bg-gray-500 hover:text-black"
        >
          Buscar
        </button>
      </div>

      {address && (
        <div className="flex mt-2 items-center justify-center">
          <div className="flex flex-col gap-y-2">
            <p>DDD: {address.ddd}</p>
            <p>Cidade: {address.localidade}</p>
            <p>Bairro: {address.bairro}</p>
            <p>{address.logradouro}</p>
          </div>
        </div>
      )}
    </div>
  );
}
