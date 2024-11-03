import styled from "styled-components";

export default function ListItems() {
  return (
    <ListItemsStyled>
      <li>Accueil</li>
      <li>Nos Produits</li>
      <li>Ingrédients</li>
      <li>Contact</li>
    </ListItemsStyled>
  );
}

const ListItemsStyled = styled.ul`
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
`;
