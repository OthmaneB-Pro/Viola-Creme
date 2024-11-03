import styled from "styled-components";
import Button from "../../../reusable-ui/Button";
import TitleMain from "./MainComponents/TitleMain";
import Bloc from "../../../reusable-ui/Bloc";
import Paragraph from "./MainComponents/Paragraph";

export default function TextMain() {
  return (
    <TextMainStyled>
      <TitleMain />
      <Bloc className="bloc1" />
      <Bloc className="bloc2" />
      <Paragraph />
      <Button label="En savoir plus" />
    </TextMainStyled>
  );
}

const TextMainStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  margin-left: 80px;
  margin-right: 50px;
  position: relative;

  button {
    margin-top: 30px;
  }

  .bloc1 {
    background: #fbe6ff;
    top: 85px;
    right: 0px;
  }
  .bloc2 {
    background: #efdb69;
    top: 210px;
    left: 0px;
  }
`;
