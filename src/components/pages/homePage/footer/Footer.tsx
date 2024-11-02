import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterStyled>
      <div>
        <h1>Viola Crème</h1>
        <p>Complète ta skin care avec nos crèmes</p>
        <ul className="footer-icons">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
      </div>
      <div>
        <h2>Compagnie</h2>
        <ul>
          <li>A propos</li>
          <li>Contact</li>
          <li>Support</li>
          <li>Partenaires</li>
        </ul>
      </div>
      <div>
        <h2>Liens utiles</h2>
        <ul>
          <li>Terme et conditions</li>
          <li>Politique privée</li>
        </ul>
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  height: 300px;
  background: #8d1197;
  color: white;
 
  ul{
    margin: 0px;
    padding: 0px;
  }

  .footer-icons {
    display: flex;
    gap: 20px;
    margin-top: 20px;

    li {
      padding: 15px;
      border-radius: 10px;
      background: #4e0053;
    }
  }
  li {
    cursor: pointer;
    list-style-type: none;
    color: white;
    margin-top: 20px;
    font-weight: bold;

    &:hover {
      cursor: pointer;
      transition: 0.2s;
      text-decoration: underline;
      color: #c7c7c7;
    }
  }
`;
