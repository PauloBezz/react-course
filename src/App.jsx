// import BlogComposition from "./components/Blog/src";
// import TeamComposition from "./components/Team";
import "./App.css";
// import { Titulo } from "./styles.c/css-modules/components/Titulo"
import { HeaderComposition } from "./components/Header/src/components/pattern";
// import Square from "./styles/styled-component/components/Square";
// import Headline from "./styles.c/css-modules/components/Headline"

function App() {
  return (
    <body>
      {/* <TeamComposition /> */}
      {/* <BlogComposition/> */}
      {/* <Square borderStyle="dotted"/> */}
      <HeaderComposition />
      {/* <Titulo/>
      <Headline/> */}
      <div className="flex bg-black w-10 h-40"></div>
    </body>
  );
}

export default App;
