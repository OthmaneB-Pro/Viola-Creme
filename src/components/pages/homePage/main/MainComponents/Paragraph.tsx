import styled from "styled-components";

export default function Paragraph() {
  return (
    <ParagraphStyled>
      Découvrez la puissance des ingrédients naturels pour une peau
      <b> douce </b>
      et <b> hydratée</b>
    </ParagraphStyled>
  );
}
const ParagraphStyled = styled.p`
  width: 220px;
  font-size: 20px;
`;
