import OrdersApp from "orders_app/OrdersApp";
import Header from "../components/Header";

const Orders = () => {
  return (
    <>
      <header>
        <Header rightNav="View Products" rightNavLink="/products" />
      </header>
      <OrdersApp />
    </>
  );
};

export default Orders;
