import "../../../styles.css";

export default function Main(props) {
  return (
    <div className="main-container">
      <h4>{props.title}</h4>
      <p>{props.text}</p>
      <button className="main-button">{props.button}</button>
    </div>
  );
}