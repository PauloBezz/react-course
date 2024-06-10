import "../../styles.css";

export default function Button(props) {
  return (
    <div className="button-container">

      <button>
        <a href="https://github.com/PauloBezz" target="_blank">
          <p>{props.button}</p>
        </a>
      </button>
    </div>
  );
}