import styled from "styled-components";
import imagem from "../assets/image/fundo.jpg";

export const HeaderContainer = styled.header`
  display: flex;
  width: fit-content;
  height: fit-content;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-image: url(${imagem});
  background-repeat: no-repeat;
  margin: auto;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTag = styled.h5`
  font-size: 16px;
  font-weight: 500;
`;

export const SectionTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
`;

export const SectionDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const ActionSubmit = styled.button``;

export const ActionCancel = styled.button``;
