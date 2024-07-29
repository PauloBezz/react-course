import styled from "styled-components";
import { fundo } from "../assets/image";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-position: top;
  align-self: center;
  align-items:center;
  justify-content: center;
  text-decoration: none;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  margin: auto;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  margin-top: 112px;
`;

export const SectionTag = styled.h5`
  font-size: 16px;
  font-weight: 500;
`;

export const SectionTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 24px;
  color: wheat;
`;

export const SectionDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: white;
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
  margin-bottom: 112px;
  font-size: 16px;
`;

export const ActionSubmit = styled.a`
  width: 96px;
  height: 48px;
  background-color: black;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const ActionCancel = styled.a`
  width: 96px;
  height: 48px;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
`;
