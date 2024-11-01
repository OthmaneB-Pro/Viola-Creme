import styled from "styled-components";

export default function ProductsPage() {
  return (
    <ProductsPageStyled>
      <div className="products-bar" />

      <h1>Nos Produits</h1>

      <div className="products-container">
        <div className="product-card">
          <img src="./img/creme.PNG" alt="product1" />
          <p>
            Découvrez la puissance des ingrédients naturels pour une peau douce
            et hydratée
          </p>
          <button>Acheter maintenant</button>
        </div>
        <div className="product-card">
          <img src="./img/creme deux.PNG" alt="product2" />
          <p>
            Découvrez la puissance des ingrédients naturels pour une peau douce
            et hydratée
          </p>
          <button>Acheter maintenant</button>
        </div>
        <div className="product-card">
          <img src="./img/creme3.PNG" alt="product3" />
          <p>
            Découvrez la puissance des ingrédients naturels pour une peau douce
            et hydratée
          </p>
          <button>Acheter maintenant</button>
        </div>
      </div>
    </ProductsPageStyled>
  );
}

const ProductsPageStyled = styled.div`
  margin-top: 60px;

  .products-bar {
    width: 675px;
    height: 1px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 60px;
  }
  h1 {
    text-align: center;
    margin-bottom: 90px;
  }
  .products-container {
    display: flex;
    gap: 150px;
    align-items: center;
    justify-content: center;
  }
  .product-card {
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
    }
    button {
      margin-top: 10px;
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
  }
`;
