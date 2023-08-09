import classes from "./ShopContent.module.css";

import CategoriesBar from "./CategoriesBar/CategoriesBar";
import ProductList from "./ProductList/ProductList";

function ShopContent() {
  return (
    <div className={classes.ShopContent}>
      <CategoriesBar />
      <ProductList />
    </div>
  );
}

export default ShopContent;
