import "./App.css";
// import { Titulo } from "./styles.c/css-modules/components/Titulo"
// import Accordion from "./hooks/components/accordion/index";
// import Square from "./styles/styled-component/components/Square";
// import Headline from "./styles/css-modules/components/Headline";
import Navbar from "./styles/css-modules/components/NavBar";
import BlogComposition from "./components/Blog/src";
import TeamComposition from "./components/Team";
import { HeaderComposition } from "./components/Header/src/components/pattern";
import FooterComposition from "./styles/tailwind/Footer/src/pattern";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar
        one={"Link One"}
        two={"Link Two"}
        three={"Link Three"}
        four={"Link Four"}
        buttonOne={"Button"}
        buttonTwo={"Button"}
      />
      <HeaderComposition />
      <BlogComposition />
      <FooterComposition />
    </>
  );
}

function App() {
  return (
    <body className="bg-[#FFEBB7]">
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/teams" Component={TeamComposition}></Route>
      </Routes>
    </body>
  );
}

export default App;
