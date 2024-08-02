import { ImageBlog, Icon } from "./../../assets/images";
import "../../styles.css";

export default function Card(props) {
  return (
    <section className="card-container">
      <img src={props.image ? props.image : ImageBlog} alt="ImageBlog" className="card-image" />

      <article className="card-context">
        <h5>{props.category}</h5>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </article>

      <article className="card-person">
        <img src={props.icon ? props.icon : Icon} alt="Icon" className="card-icon" />
        <div className="person-text">
          <h5>{props.name}</h5>
          <div className="person-time">
            <p>{props.date}</p>
            <div className="person-point"></div>
            <p>{props.minutes}</p>
          </div>
        </div>
      </article>
    </section>
  );
}
