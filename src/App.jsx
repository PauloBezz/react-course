import "./App.css";
import { Routes, Route } from "react-router-dom";
import TeamComposition from "./components/Team";
import Price from "./styles/tailwind/Price/src";
import GetPokemon from "./pages/Pokemon/src";
import Home from "./pages/Home";
import GetCep from "./request";
// import Home from "./pages/Home";
// import About from "./styles/tailwind/About/src";
// import { Titulo } from "./styles.c/css-modules/components/Titulo"
// import Accordion from "./hooks/components/accordion/index";
// import Square from "./styles/styled-component/components/Square";
// import Headline from "./styles/css-modules/components/Headline";

function App() {
  return (
    <body className="bg-[#FFEBB7]">
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/teams" Component={TeamComposition}></Route>
        <Route exact path="/cep" Component={GetCep}></Route>
        <Route exact path="/price" Component={Price}></Route>
        <Route exact path="/pokemon" Component={GetPokemon}></Route>
      </Routes>
    </body>
  );
}

export default App;
