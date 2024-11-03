import styled from "styled-components";
import ProductTitle from "./ProductTitle";
import ProductBar from "./ProductBar";
import ProductCard from "./ProductCard";

export default function ProductsPage() {
  return (
    <ProductsPageStyled>
      <ProductBar />
      <ProductTitle />
      <ProductCard />
    </ProductsPageStyled>
  );
}

const ProductsPageStyled = styled.div`
  margin-top: 60px;
`;
