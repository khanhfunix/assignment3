import Footer from "../Components/Main Layout/Footer";
import PageContent from "../Components/Main Layout/PageContent";

import Dummy from "../Components/UI/Dummy Component/Dummy";

import ShopContent from "../Components/Shop Components/ShopContent";
import { Link } from "react-router-dom";

function ShopPage() {
  const link = (
    <Link to="/shop" style={{ color: "#a39f9f", marginRight: 40 }}>
      <h2>Shop</h2>
    </Link>
  );
  return (
    <>
      <PageContent>
        <Dummy content="SHOP" link={link} />
        <ShopContent />
      </PageContent>
      <Footer />
    </>
  );
}

export default ShopPage;
