import "../../../styles.css";
import { EmptyImage, Linkedin, X, Dribble } from "../../assets/images";

export default function Content(props) {
  return (
    <div className="content-container">
      <img src={EmptyImage} alt="icon" />

      <div className="content-text">
        <div className="content-title">
          <h4>{props.name}</h4>
          <h3>{props.job}</h3>
        </div>
        <p>{props.description}</p>
      </div>

      <div className="content-icons">
        <a href="https://br.linkedin.com/" target="_black">
          <img src={Linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQiLCJteCI6IjIifQ%3D%3D%22%7D"
          target="_black"
        >
          <img src={X} alt="X" />
        </a>
        <a href="httDribbleiDribbleom/" target="_blank">
          <img src={Dribble} alt="Dribble" />
        </a>
      </div>
    </div>
  );
}
