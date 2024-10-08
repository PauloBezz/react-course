import "../../../styles.css";
import { EmptyImage, Linkedin, X, Dribble } from "../../assets/images";

export default function Content(props) {
  return (
    <article className="content-container">
      <img src={props.image ? props.image : EmptyImage} alt="icon" />

      <section className="content-text">
        <div className="content-title">
          <h4>{props.name}</h4>
          <h3>{props.job}</h3>
        </div>
        <p>{props.description}</p>
      </section>

      <section className="content-icons">
        <a href={props.linkedin} target="_blank" rel="noreferrer">
          <img src={Linkedin} alt="Linkedin" />
        </a>
        <a href={props.x} target="_blank" rel="noreferrer">
          <img src={X} alt="X" />
        </a>
        <a href={props.dribble} target="_blank" rel="noreferrer">
          <img src={Dribble} alt="Dribble" />
        </a>
      </section>
    </article>
  );
}