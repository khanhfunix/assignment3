import Banner from "../Components/Home Components/Banner/Banner";
import Categories from "../Components/Home Components/Categories/Categories";
import ProductsList from "../Components/Home Components/Products/Products";
import Footer from "../Components/Main Layout/Footer";
import PageContent from "../Components/Main Layout/PageContent";
import More from "../Components/Home Components/Another Components/More";

function HomePage() {
  return (
    <>
      <PageContent>
        <Banner />
        <Categories />
        <ProductsList />
        <More />
      </PageContent>
      <Footer />
    </>
  );
}

export default HomePage;
