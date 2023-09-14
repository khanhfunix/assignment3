import Cart from "../Components/Cart Components/Cart";
import Footer from "../Components/Main Layout/Footer";

import PageContent from "../Components/Main Layout/PageContent";

import Dummy from "../Components/UI/Dummy Component/Dummy";
import { Link } from "react-router-dom";

function CartPage() {
  const link = (
    <Link to="/cart" style={{ color: "#a39f9f", marginRight: 40 }}>
      <h2>Cart</h2>
    </Link>
  );
  return (
    <>
      <PageContent>
        <Dummy content="CART" link={link} />
        <Cart />
      </PageContent>
      <Footer />
    </>
  );
}

export default CartPage;
