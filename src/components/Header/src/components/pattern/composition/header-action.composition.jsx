import { ActionContainer, ActionSubmit, ActionCancel } from "../style";

export default function Action(props) {
  return (
    <div>
      <ActionContainer>
        <ActionSubmit href={props.link}>{props.submit}</ActionSubmit>
        <ActionCancel href={props.linkBuy}>{props.cancel}</ActionCancel>
      </ActionContainer>
    </div>
  );
}