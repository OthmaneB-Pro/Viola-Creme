import styled from "styled-components";
import RightNavbar from "./RightNavbar";
import Title from "./Title";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Title />
      <RightNavbar />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  width: 100%;
  height: 69px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8d1197;
`;
