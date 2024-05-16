import "./App.css";
import Elefante from "./assets/images/svg/elefante.svg";
import Girafa from "./assets/images/svg/girafa.svg";
import Morsa from "./assets/images/svg/morsa.svg";
import Rena from "./assets/images/svg/rena.svg";
import TvPikachu from "./assets/images/svg/tvpikachu.svg";
import Urso from "./assets/images/svg/urso.svg";
import Banner from "./components/Banner";

export default function App() {
  return (
    <body>
      <div className="card">
        <h1>React Course</h1>
        <p>Front-End Javascript</p>
      </div>

      <Banner text='Elefante' description='Aqui está a descrição' image={Elefante}/>
      <Banner text='Girafa' description='Aqui está a descrição' image={Girafa}/>
      <Banner text='Morsa' description='Aqui está a descrição' image={Morsa}/>
      <Banner text='Rena' description='Aqui está a descrição' image={Rena}/>
      <Banner text='TvPikachu' description='Aqui está a descrição' image={TvPikachu}/>
      <Banner text='Urso' description='Aqui está a descrição' image={Urso}/>
    </body>
  );
}