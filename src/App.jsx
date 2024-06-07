// import BlogComposition from "./components/Blog/src";
// import TeamComposition from "./components/Team";
import "./App.css";
import Navbar from "./styles/css-modules/components/NavBar";
// import { Titulo } from "./styles.c/css-modules/components/Titulo"
// import { HeaderComposition } from "./components/Header/src/components/pattern";
// import Accordion from "./hooks/components/accordion/index";
// import Square from "./styles/styled-component/components/Square";
// import Headline from "./styles.c/css-modules/components/Headline"

function App() {
  return (
    <body>
      {/* <TeamComposition /> */}
      {/* <BlogComposition/> */}
      {/* <Square borderStyle="dotted"/> */}
      {/* <HeaderComposition /> */}
      {/* <Titulo/>
      <Headline/> */}
      {/* <Accordion/> */}
      <Navbar one={'Link One'} two={'Link Two'} three={'Link Three'} four={'Link Four'} buttonOne={'Button'} buttonTwo={'Button'} />
    </body>
  );
}

export default App;
