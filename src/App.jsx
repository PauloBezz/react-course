import "./App.css";
import { Routes, Route } from "react-router-dom";
import TeamComposition from "./components/Team";
import GetPokemon from "./pages/Pokemon/src";
import Home from "./pages/Home";
import GetCep from "./request";
import Login from "./pages/User/components/Login";
import Signin from "./pages/User/components/Signin";
import About from "./pages/About";
// import { Titulo } from "./styles.c/css-modules/components/Titulo"
// import Accordion from "./hooks/components/accordion/index";
// import Square from "./styles/styled-component/components/Square";
// import Headline from "./styles/css-modules/components/Headline";

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Route exact path="/teams" Component={TeamComposition}></Route>
      <Route exact path="/cep" Component={GetCep}></Route>
      <Route exact path="/sign" element={
        <Signin 
        user={'Username'}
        email={'E-mail'}
        pass={'Password'}
        confirm={'Confirm password'}
        />}>
      </Route>
      <Route exact path="/login" Component={Login}></Route>
      <Route exact path="/about" Component={About}></Route>
      <Route exact path="/pokemon" Component={GetPokemon}></Route>
    </Routes>
  );
}

export default App;