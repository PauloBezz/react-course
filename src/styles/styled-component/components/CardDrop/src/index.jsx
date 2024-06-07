import * as C from "./styles"
import Cube from "./svg/Cube.svg"

export default function DropCard(props) {
  return (
    <C.CardContainer>
        <C.CardImage src={Cube}/>
        <C.CardText>
            <C.CardPage>{props.page}</C.CardPage>
            <C.CardDescription>{props.description}</C.CardDescription>
        </C.CardText>
    </C.CardContainer>
  );
}
