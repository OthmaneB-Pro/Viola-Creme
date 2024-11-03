import styled from "styled-components";
import Button from "../../../reusable-ui/Button";
import ListItems from "./ListItems";

export default function RightNavbar() {
  return (
    <RightNavbarStyled>
      <ListItems/>
      <Button label="Acheter maintenant" />
    </RightNavbarStyled>
  );
}

const RightNavbarStyled = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 24px;
    margin-right: 30px;
  }
`;
