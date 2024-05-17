import "./styles.css";
import Seta from "../../assets/images/svg/seta.svg";
import Image from "../../assets/images/svg/image.svg";


export default function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout-content">
        <div className="layout-description">
          <div className="layuot-text">
            <h4>{props.tag}</h4>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
          </div>

          <div className="layout-button">
            <button className="button-box">{props.buttonLeft}</button>
            <button className="button-link">
              <p>{props.buttonRight}</p>
              <img src={Seta} alt="" />
            </button>
          </div>
        </div>
        <img src={props.image ? props.image : Image} alt="" />
      </div>
    </div>
  );
}
