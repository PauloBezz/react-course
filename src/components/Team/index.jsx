import "./styles.css";
import { Team } from "./src/pattern/composition";

const TeamUsers = [
  {
    image: "https://imagensemoldes.com.br/wp-content/uploads/2020/02/Mickey-PNG-48.png",
    name: "Mickey Mouse",
    job: "Apresentador",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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
      <Team.Main
        title={"We’re hiring!"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
        button={"Open options"}
      />
    </div>
  );
}