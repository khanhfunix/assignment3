import Footer from "../Components/Main Layout/Footer";
import PageContent from "../Components/Main Layout/PageContent";
import OrderList from "../Components/Order Components/OrderList";
import Dummy from "../Components/UI/Dummy Component/Dummy";
import { Link } from "react-router-dom";

function OrderPage() {
  const link = (
    <Link to="/order" style={{ color: "#a39f9f", marginRight: 40 }}>
      <h2>Order</h2>
    </Link>
  );
  return (
    <>
      <PageContent>
        <Dummy content="ORDER" link={link} />
        <OrderList />
      </PageContent>

      <Footer />
    </>
  );
}

export default OrderPage;
