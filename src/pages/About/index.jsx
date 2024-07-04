import Navbar from "../../styles/css-modules/components/NavBar"
import imagem from "./assets/images/myself.png"

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
                <h1>Developer</h1>
                <img src={imagem} alt="" />
                <h2>Técnico em Desenvolvimento de Sistemas</h2>
                <p>Agradeço pela atenção em ver o meu trabalho do curso de React</p>


            </section>

        </>
    )
}