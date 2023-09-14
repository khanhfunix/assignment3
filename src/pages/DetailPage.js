import Detail from "../Components/Detail Components/Detail";
import Footer from "../Components/Main Layout/Footer";
import NavBar from "../Components/Main Layout/NavBar";
import PageContent from "../Components/Main Layout/PageContent";
import Dummy from "../Components/UI/Dummy Component/Dummy";
import { Link } from "react-router-dom";

function DetailPage() {
  const link = (
    <>
      <Link to="/shop">
        <h2>Shop</h2>
      </Link>
      <span>/</span>
      <Link to="" style={{ color: "#a39f9f", marginRight: 40 }}>
        <h2>Detail</h2>
      </Link>
    </>
  );
  return (
    <>
      <NavBar />
      <PageContent>
        <Dummy content="DETAIL" link={link} />
        <Detail />
      </PageContent>
      <Footer />
    </>
  );
}

export default DetailPage;
