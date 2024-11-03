import styled from "styled-components";

export default function Image() {
  return <ImageStyled src="./img/bottle-viola.png" alt="flacons" />;
}
const ImageStyled = styled.img`
  border-radius: 20px;
  margin-top: 40px;
  width: 800px;
`;
