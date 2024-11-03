import styled from "styled-components";

export default function ProductTitle() {
  return <ProductTitleStyled>Nos Produits</ProductTitleStyled>;
}

const ProductTitleStyled = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 36px;
  margin-bottom: 90px;
`;
