import styled from "styled-components";
import TextMain from "./TextMain";
import Image from "./MainComponents/Image";

export default function MainPage() {
  return (
    <MainPageStyled>
      <TextMain />
      <Image />
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`;
