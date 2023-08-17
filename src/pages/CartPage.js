import Cart from "../Components/Cart Components/Cart";
import Footer from "../Components/Main Layout/Footer";
import NavBar from "../Components/Main Layout/NavBar";
import PageContent from "../Components/Main Layout/PageContent";

import Dummy from "../Components/UI/Dummy Component/Dummy";

function CartPage() {
  return (
    <>
      <PageContent>
        <Dummy content="CART" />
        <Cart />
      </PageContent>
      <Footer />
    </>
  );
}

export default CartPage;
