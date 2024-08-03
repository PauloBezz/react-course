import Navbar from "../../styles/css-modules/components/NavBar"
import imagem from "./assets/images/myself.png"
import './styles.css'

export default function About() {
    return (
        <>
            <Navbar
                one="Teams"
                two="Cep"
                three="Pokemon"
                four="About"
                five="More"
                buttonOne="Sing up"
                buttonTwo="Login"
            />

            <section className="about-container">
                <article className="about-content">

                <h1>Developer - Paulo Bezerra</h1>
                <img src={imagem} alt="Eu mesmo" title="Minha foto" className="about-image" />
                
                <div className="about-text">
                    <h2>Técnico em Desenvolvimento de Sistemas</h2>
                    <p>Agradeço pela atenção em ver o meu trabalho do curso de React</p>
                </div>
                </article>
            </section>
        </>
    )
}