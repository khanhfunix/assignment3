import classes from "./ProductDetail.module.css";

function ProductDetail({ product }) {
  const description = product.long_desc?.replace("•", "\n•") || "";
  return (
    <>
      <span className={classes.likeMainBtn}>DESCRIPTION</span>
      <h3>PRODUCT DESCRIPTION</h3>
      <p style={{ whiteSpace: "pre" }}>{description}</p>
      <h3>RELATED PRODUCTS</h3>
    </>
  );
}

export default ProductDetail;
