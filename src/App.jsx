import Header from "./components/Header";
import OrdersApp from "orders_app/OrdersApp";
import ProductsApp from "products_app/ProductsApp";

function App() {
  return (
    <div>
      <header>
        <Header
          addProductLinks={true}
          rightNav="Your Orders"
          hideRightNav={true}
        />
      </header>
      <OrdersApp />
      <ProductsApp />
    </div>
  );
}

export default App;
