import styled from "styled-components";

export default function ProductBar() {
  return <ProductBarStyled />;
}

const ProductBarStyled = styled.div`
  width: 675px;
  height: 1px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 60px;
`;
