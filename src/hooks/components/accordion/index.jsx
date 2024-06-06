import {
  AccordionButton,
  AccordionContainer,
  AccordionContent,
  AccordionImage,
  AccordionText,
  AccordionWrapper,
  ContentText,
} from "./style";
import { up, down } from "./src/svg/index";
import { useState } from "react";

export default function Accordion() {
  // controle de estado do content
  const [visible, setVisible] = useState(false);
  // validação da direção da seta
  const Angle = visible ? up : down;
  //função de abertura do accordion
  function HandleAccordion() {
    return setVisible(!visible);
  }

  return (
    <AccordionWrapper>
      <AccordionContainer>
        <AccordionText>What is an accordion component?</AccordionText>
        <AccordionButton onClick={HandleAccordion}>
          <AccordionImage src={Angle} />
        </AccordionButton>
      </AccordionContainer>

      {visible && (
        <AccordionContent>
          <ContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            necessitatibus quisquam ducimus vero, maiores cumque consectetur, in
            incidunt aspernatur iusto assumenda. Corporis cupiditate
            reprehenderit, deleniti dolor facere aliquam nesciunt libero.
          </ContentText>
        </AccordionContent>
      )}
    </AccordionWrapper>
  );
}
