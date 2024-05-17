import "./App.css";
import Layout from "./components/Layout";
import Pernambuco from "./assets/images/svg/estado-de-pernambuco-og.webp";

export default function App() {
  return (
    <body>
      <div className="card">
        <h1>React Course</h1>
        <p>Front-End Javascript</p>
      </div>

      <Layout tag={'Tagline'} title={'Medium length section heading goes here'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'} buttonLeft={'Button'} buttonRight={'Button'} image={Pernambuco}/>
    </body>
  );
}
