import styled from "styled-components";
import Button from "./Button";

type CardType = {
  src: string;
  alt: string;
  paragraph: string;
};
export default function Card({ src, alt, paragraph }: CardType) {
  return (
    <CardStyled>
      <img src={src} alt={alt} />
      <p dangerouslySetInnerHTML={{ __html: paragraph }} />{" "}
      <Button label="Acheter maintenant" />
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  width: 225px;

  p {
    text-align: center;
  }
  img {
    background: #f0f0f0;
    width: 175px;
    height: 175px;
    border-radius: 50%;
    border: 2px solid black;
    object-fit: contain;
    margin-bottom: 20px;
  }
  button {
    margin-top: 20px;
  }
`;
