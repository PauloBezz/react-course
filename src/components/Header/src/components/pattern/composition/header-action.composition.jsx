import { ActionContainer, ActionSubmit, ActionCancel } from "../style";

export default function Action(props) {
  return (
    <div>
      <ActionContainer>
        <ActionSubmit>{props.submit}</ActionSubmit>
        <ActionCancel>{props.cancel}</ActionCancel>
      </ActionContainer>
    </div>
  );
}
