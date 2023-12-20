import Footer from "../Components/Main Layout/Footer";
import PageContent from "../Components/Main Layout/PageContent";
import OrderDetail from "../Components/Order Components/OrderDetail";
import Dummy from "../Components/UI/Dummy Component/Dummy";
import { Link } from "react-router-dom";

function OrderDetailPage() {
  const link = (
    <Link style={{ color: "#a39f9f", marginRight: 40 }}>
      <h2>Order detail</h2>
    </Link>
  );

  return (
    <>
      <PageContent>
        <Dummy content="ORDER DETAIL" link={link} />
        <OrderDetail />
      </PageContent>
      <Footer />
    </>
  );
}

export default OrderDetailPage;
