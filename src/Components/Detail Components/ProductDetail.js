import classes from "./ProductDetail.module.css";

function ProductDetail({ product }) {
  return (
    <>
      <span className={classes.likeMainBtn}>DESCRIPTION</span>
      <h3>PRODUCT DESCRIPTION</h3>
      <p>{product.long_desc}</p>
      <h3>RELATED PRODUCTS</h3>
    </>
  );
}

export default ProductDetail;
