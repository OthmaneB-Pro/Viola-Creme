import styled from "styled-components";
import { listCard } from "./card/listCard";
import Card from "../../../reusable-ui/Card";

export default function ProductCard() {
  return (
    <ContainerStyled>
      {listCard.map((card) => (
        <Card src={card.img} alt={card.alt} paragraph={card.paragraph} />
      ))}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  gap: 150px;
  align-items: center;
  justify-content: center;
`;
