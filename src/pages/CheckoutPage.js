import PageContent from "../Components/Main Layout/PageContent";
import Footer from "../Components/Main Layout/Footer";
import Dummy from "../Components/UI/Dummy Component/Dummy";
import { Link } from "react-router-dom";
import Checkout from "../Components/Checkout Components/Checkout";

function CheckoutPage() {
  const link = (
    <>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <span> /</span>
      <Link to="/cart">
        <h2>Cart</h2>
      </Link>
      <span> /</span>
      <Link to="/checkout" style={{ color: "#a39f9f", marginRight: 40 }}>
        <h2>CheckOut</h2>
      </Link>
    </>
  );
  return (
    <>
      <PageContent>
        <Dummy content="CART" link={link} />
        <Checkout />
      </PageContent>
      <Footer />;
    </>
  );
}

export default CheckoutPage;
