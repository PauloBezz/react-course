import Navbar from "./styles/css-modules/components/NavBar";
import BlogComposition from "./components/Blog/src";
import "./App.css";
// import TeamComposition from "./components/Team";
// import { Titulo } from "./styles.c/css-modules/components/Titulo"
import { HeaderComposition } from "./components/Header/src/components/pattern";
// import Accordion from "./hooks/components/accordion/index";
// import Square from "./styles/styled-component/components/Square";
// import Headline from "./styles/css-modules/components/Headline";
import FooterComposition from "./styles/styled-component/components/Footer/src/pattern";

function App() {
  return (
    <body className="bg-[#FFEBB7]">
      {/* <TeamComposition /> */}
      {/* <Square borderStyle="dotted"/> */}
      {/* <Titulo/> */}
      {/* <Headline/> */}
      {/* <Accordion/> */}


      <Navbar one={'Link One'} two={'Link Two'} three={'Link Three'} four={'Link Four'} buttonOne={'Button'} buttonTwo={'Button'} />
      <HeaderComposition />
      <BlogComposition />
      <FooterComposition />
    </body>
  );
}

export default App;
