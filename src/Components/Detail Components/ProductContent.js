import classes from "./ProductContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function ProductContent({ product, onIncrease, onDecrease, quantity, onAdd }) {
  // component hien thi detail cua product

  return (
    <div className={classes.productContent}>
      <h1>{product.name}</h1>
      <h3>{Number(product.price).toLocaleString("de-DE")}</h3>
      <p>{product.short_desc}</p>
      <p>
        <span>CATEGORY: </span>
        {product.category}
      </p>
      <p>
        <span>Quantity available: </span>
        {product.count}
      </p>
      <div className={classes.setQuantity}>
        <div className={classes.optionQuantity}>
          <h4>QUANTITY</h4>
          <button onClick={onDecrease}>
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <span>{quantity}</span>
          <button onClick={onIncrease}>
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
        <div className={classes.mainBtn}>
          <button onClick={onAdd}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
