import {
  SectionContainer,
  SectionTag,
  SectionTitle,
  SectionDescription,
} from "../style";

export default function Section(props) {
  return (
    <SectionContainer>
      <SectionTag>{props.tag}</SectionTag>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionDescription>{props.description}</SectionDescription>
    </SectionContainer>
  );
}
