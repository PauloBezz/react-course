import "./App.css";
import { Routes, Route } from "react-router-dom";
import TeamComposition from "./components/Team";
import Home from "./Home";
import About from "./styles/tailwind/About/src";
// import { Titulo } from "./styles.c/css-modules/components/Titulo"
// import Accordion from "./hooks/components/accordion/index";
// import Square from "./styles/styled-component/components/Square";
// import Headline from "./styles/css-modules/components/Headline";

function App() {
  return (
    <body className="bg-[#FFEBB7]">
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/teams" Component={TeamComposition}></Route>
        <Route path="/about" Component={About}></Route>
      </Routes>
    </body>
  );
}

export default App;
