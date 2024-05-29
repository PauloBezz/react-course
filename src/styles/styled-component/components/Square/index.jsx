import { SquareContainer, SquareLink } from "./style";

export default function Square(props) {
  return (
    <SquareContainer borderStyle={props.squad}>
      <SquareLink  href="https://styled-components.com/" target="_blank">
        {props.borderStyle ? props.borderStyle : "Adicione a prop no Square"}
      </SquareLink>
    </SquareContainer>
  );
}
