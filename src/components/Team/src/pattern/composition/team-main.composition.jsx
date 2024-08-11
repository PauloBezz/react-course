import "../../../styles.css";

export default function Main(props) {
  return (
    <div className="main-container">
      <h4>{props.title}</h4>
      <p>{props.text}</p>
      <button className="main-button"><a href="https://www.disneyplus.com/pt-br?cid=DSS-Search-Google-71700000075038498-&s_kwcid=AL!8468!3!701998758396!e!!g!!disney&gad_source=1&gclid=Cj0KCQjwn9y1BhC2ARIsAG5IY-6ZAWvtp3YeVY2wHnswPduOTHdPrfCPoglzOHnXFzi6QclI1VKkdFAaAqJKEALw_wcB&gclsrc=aw.ds">{props.button}</a></button>
    </div>
  );
}