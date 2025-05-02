import Header from "../components/Header";
import ProductsApp from "products_app/ProductsApp";

const Products = () => {
  return (
    <>
      <header>
        <Header
          addProductLinks={true}
          rightNav="Your Orders"
          hideRightNav={true}
          rightNavLink="/orders"
        />
      </header>
      <ProductsApp />
    </>
  );
};

export default Products;
