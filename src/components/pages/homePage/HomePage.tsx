import MainPage from "./main/MainPage";
import Navbar from "./navbar/Navbar";
import ProductsPage from "./products/ProductsPage";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <ProductsPage/>
    </div>
  );
}
