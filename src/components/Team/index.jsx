import "./styles.css";
import { Team } from "./src/pattern/composition";

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
];

export default function TeamComposition() {
  return (
    <div className="team-container">
      <Team.Section
        tag={"Tagline"}
        title={"Our Team"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
      />
      <div className="team-content">
      {TeamUsers.map((user, key) => {
        return (
          <Team.Content
            key={key}
            image={user.image}
            name={user.name}
            job={user.job}
            description={user.description}
            linkedin={user.mediaSocial.linkedin}
            x={user.x}
            dribble={user.dribble}
          />
        );
      })}
      </div>

      <Team.Main
        title={"We’re hiring!"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
        button={"Open options"}
      />
    </div>
  );
}