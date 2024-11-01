import styled from "styled-components";

export default function Navbar() {
  return (
    <NavbarStyled>
      <h1>Viola Crème</h1>
      <div>
        <div>
          <ul>
            <li>Accueil</li>
            <li>Nos Produits</li>
            <li>Ingrédients</li>
            <li>Contact</li>
          </ul>
        </div>
        <button>Acheter maintenant</button>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  width: 100%;
  height: 69px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8d1197;

  h1 {
    color: white;
    font-size: 36px;
    font-family: "Gorditas", cursive; // Pas la bonne
    font-weight: bold;
    margin-left: 16px;
  }
  ul {
    list-style-type: none;
    color: white;
    display: flex;
    gap: 18px;
    font-size: 20px;
  }
  button {
    margin-left: 24px;
    background: #4e0053;
    color: white;
    width: 230px;
    height: 45px;
    border-radius: 15px;
    font-size: 20px;
  }
`;
