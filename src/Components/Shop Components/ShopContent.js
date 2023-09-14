import classes from "./ShopContent.module.css";

import CategoriesBar from "./CategoriesBar/CategoriesBar";
import ProductList from "./ProductList/ProductList";

function ShopContent() {
  // component chinh cua shop page
  return (
    <div className={classes.ShopContent}>
      <CategoriesBar />
      <ProductList />
    </div>
  );
}

export default ShopContent;
