import "./styles.css";
import { Team } from "./src/pattern/composition";
import Navbar from "../../styles/css-modules/components/NavBar";

const TeamUsers = [
  {
    image: "https://imagensemoldes.com.br/wp-content/uploads/2020/02/Mickey-PNG-48.png",
    name: "Mickey Mouse",
    job: "Apresentador",
    description:
      "Inspirado por personalidades do cinema mudo como Charlie Chaplin e Douglas Fairbanks, Mickey é tradicionalmente caracterizado como um oprimido simpático que sobrevive com coragem e engenhosidade diante de desafios maiores do que ele.",
    mediaSocial: {
      linkedin: "https://br.linkedin.com/",
      x: "https://x.com/",
      dribble: "https://dribbble.com/",
    },
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/pt/6/6f/Donald.png",
    name: "Pato Donald",
    job: "Comediante",
    description:
      "Pato Donald apareceu pela primeira vez no desenho animado “A Galinha Esperta”, lançado em 9 de junho de 1934, entretanto seu aniversário pode ser celebrado em qualquer sexta-feira 13, uma tradição que começou graças a sua constante má sorte.",
    mediaSocial: {
      linkedin: "https://br.linkedin.com/",
      x: "https://x.com/",
      dribble: "https://dribbble.com/",
    },
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/pt/thumb/6/67/Minnie_Mouse.png/250px-Minnie_Mouse.png",
    name: "Minnie Mouse",
    job: "Namorada de Mickey",
    description:
      "Minnie Mouse é uma personagem do mundo fictício de Disney. Pertence ao Universo de Mickey, seu namorado. Criada em 1928 por Walt Disney, apareceu pela primeira vez junto com Mickey na animação Steamboat Willie, em 18 de novembro daquele ano.",
    mediaSocial: {
      linkedin: "https://br.linkedin.com/",
      x: "https://x.com/",
      dribble: "https://dribbble.com/",
    },
  },
  {
    image: "https://www.desenhar.org/wp-content/uploads/2023/03/Desenhando-o-Pateta-passo10.jpg",
    name: "Pateta",
    job: "Pai e amigo",
    description:
      "Pateta é um personagem de animação dos Estúdios Walt Disney criado em 1932. Ele é um cão antropomórfico da raça Bloodhound de aparência magra, esguia, alta, e desengonçada. É conhecido pelo público por seu jeito atrapalhado, engraçado e bondoso e por seu chapéu singular.",
    mediaSocial: {
      linkedin: "https://br.linkedin.com/",
      x: "https://x.com/",
      dribble: "https://dribbble.com/",
    },
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/en/b/b2/Pluto_%28Disney%29_transparent.png",
    name: "Mickey Mouse",
    job: "Melhor amigo",
    description:
      "Pluto é um personagem da Disney, idealizado como um cão da raça bloodhound, que é o mascote do personagem Mickey. Destrambelhado, sempre arranja muita confusão, mas no fim acaba ajudando seu dono a desvendar alguns mistérios.",
    mediaSocial: {
      linkedin: "https://br.linkedin.com/",
      x: "https://x.com/",
      dribble: "https://dribbble.com/",
    },
  },
  {
    image: "https://appliquedesignz.com/image/cache/data/Daisy_Donald_Duck_Machine_Embroidery_Design_1563_0-1200x1200.jpg",
    name: "Margarida",
    job: "Namorada de Donald",
    description:
      "Margarida, é uma das personagens de banda desenhada/história em quadrinhos e cartoon/desenho animado da Walt Disney. Ela foi criada como a contraparte feminina e namorada de Pato Donald, e apareceu pela primeira vez no desenho Mr. Duck Steps Out em 1940.",
    mediaSocial: {
      linkedin: "https://br.linkedin.com/",
      x: "https://x.com/",
      dribble: "https://dribbble.com/",
    },
  },
];

export default function TeamComposition() {
  return (
    <>
      <Navbar
        one={"Teams"}
        two={"Cep"}
        three={"Pokemon"}
        four={"About"}
        five={"More"}
        buttonOne={"Sing up"}
        buttonTwo={"Login"}
      />
      
      <article className="team-container">
        <Team.Section
          tag={"Tagline"}
          title={"Our Team"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
        />
        <section className="team-content">
          {TeamUsers.map((user, key) => {
            const { image, name, job, description } = user;
            return (
              <Team.Content
                key={key}
                image={image}
                name={name}
                job={job}
                description={description}
                linkedin={user.mediaSocial.linkedin}
                x={user.mediaSocial.x}
                dribble={user.mediaSocial.dribble}
              />
            );
          })}
        </section>

        <Team.Main
          title={"We're hiring!"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
          button={"Open options"}
        />
      </article>
    </>
  );
}