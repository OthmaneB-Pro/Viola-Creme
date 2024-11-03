import styled from "styled-components";

export default function Title() {
  return <TitleStyled>Viola Crème</TitleStyled>;
}

const TitleStyled = styled.h1`
  color: white;
  font-size: 36px;
  font-family: "Gorditas", cursive;
  font-weight: bold;
  margin-left: 16px;
`;
