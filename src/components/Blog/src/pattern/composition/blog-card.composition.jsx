import { ImageBlog, Icon } from "./../../assets/images";
import "../../styles.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <img src={props.image ? props.image : ImageBlog} alt="ImageBlog" className="card-image" />

      <div className="card-context">
        <h5>{props.category}</h5>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>

      <div className="card-person">
        <img src={props.icon ? props.icon : Icon} alt="Icon" className="card-icon" />
        <div className="person-text">
          <h5>{props.name}</h5>
          <div className="person-time">
            <p>{props.date}</p>
            <div className="person-point"></div>
            <p>{props.minutes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
