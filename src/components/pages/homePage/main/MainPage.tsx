import styled from "styled-components";

export default function MainPage() {
  return (
    <MainPageStyled>
      <div>
        <div className="main-page-text">
          <h1>REVELEZ VOTRE ECLAT NATUREL</h1>
          <div className="bloc1" />
          <div className="bloc2" />
          <p>
            Découvrez la puissance des ingrédients naturels pour une peau
            <b> douce </b>
            et <b> hydratée</b>
          </p>

          <button>Acheter maintenant</button>
        </div>
      </div>
      <img src="./img/bottle-viola.png" alt="flacons" />
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;

  .main-page-text {
    display: flex;
    flex-direction: column;
    width: 220px;
    margin-left: 80px;
    margin-right: 50px;
    position: relative;
  }
  h1 {
    font-size: 48px;
    margin-bottom: 10px;
    line-height: 1.3;
  }
  p {
    width: 220px;
    font-size: 20px;
  }
  button {
    margin-top: 30px;
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
  img {
    border-radius: 20px;
    margin-top: 40px;
    width: 800px;
  }

  .bloc1 {
    width: 230px;
    height: 85px;
    transform: rotate(-5deg);
    background: #fbe6ff;
    position: absolute;
    top: 85px;
    right: 0px;
    z-index: -1;
  }
  .bloc2 {
    width: 230px;
    height: 85px;
    transform: rotate(-5deg);
    background: #efdb69;
    position: absolute;
    top: 210px;
    left: 0px;
    z-index: -1;
  }
`;
