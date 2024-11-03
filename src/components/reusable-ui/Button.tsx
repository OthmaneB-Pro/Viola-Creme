import styled from "styled-components";

type ButtonType = {
    label : string;
}

export default function Button({ label } : ButtonType) {
  return <ButtonStyled>{label}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background: #4e0053;
  color: white;
  width: 230px;
  height: 45px;
  border-radius: 15px;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    color: #c7c7c7;
  }
`;
