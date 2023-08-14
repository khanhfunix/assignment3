import Footer from "../Components/Main Layout/Footer";
import PageContent from "../Components/Main Layout/PageContent";

import Dummy from "../Components/UI/Dummy Component/Dummy";

import ShopContent from "../Components/Shop Components/ShopContent";

function ShopPage() {
  return (
    <>
      <PageContent>
        <Dummy content="SHOP" />
        <ShopContent />
      </PageContent>
      <Footer />
    </>
  );
}

export default ShopPage;
