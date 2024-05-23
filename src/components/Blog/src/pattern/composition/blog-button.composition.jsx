import "../../styles.css";

export default function Button(props) {
  return (
    <div className="button-container">
      <button>
        <p>{props.button}</p>
      </button>
    </div>
  );
}