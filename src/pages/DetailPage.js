import Detail from "../Components/Detail Components/Detail";
import Footer from "../Components/Main Layout/Footer";
import NavBar from "../Components/Main Layout/NavBar";
import PageContent from "../Components/Main Layout/PageContent";
import Dummy from "../Components/UI/Dummy Component/Dummy";

function DetailPage() {
  return (
    <>
      <NavBar />
      <PageContent>
        <Dummy content="DETAIL" />
        <Detail />
      </PageContent>
      <Footer />
    </>
  );
}

export default DetailPage;
