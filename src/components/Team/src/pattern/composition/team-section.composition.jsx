import "../../../styles.css";

export default function Section(props) {
  return (
    <div className="section-container">
      <h3>{props.tag}</h3>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}
