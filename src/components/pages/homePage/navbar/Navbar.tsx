import styled from "styled-components";

export default function Navbar() {
  return (
    <NavbarStyled>
      <h1>Viola Crème</h1>
      <div className="navbar-right">
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
    gap: 35px;
    font-weight: bold;
    font-size: 20px;

    li:hover {
      cursor: pointer;
      transition: 0.2s;
      text-decoration: underline;
      color: #c7c7c7;
    }
  }
  button {
    margin-left: 24px;
    margin-right: 30px;
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
  }
  .navbar-right {
    display: flex;
    align-items: center;
  }
`;
