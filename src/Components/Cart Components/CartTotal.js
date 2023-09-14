import classes from "./CartTotal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

function CartTotal({ total }) {
  // component hien thi don hang
  return (
    <div className={classes.CartTotal}>
      <h3>CART TOTAL</h3>
      <div className={classes.CartTotalInfo}>
        <h4>SUBTOTAL</h4>
        <h5>{Number(total).toLocaleString("de-DE")}</h5>
      </div>
      <div className={classes.CartTotalInfo}>
        <h4>TOTAL</h4>
        <h3>{Number(total).toLocaleString("de-DE")}</h3>
      </div>
      <form className={classes.form}>
        <input
          className={classes.inputCoupon}
          placeholder="Enter Your Coupon"
          id="coupon"
          type="text"
        />
        <button className={classes.couponBtn}>
          <FontAwesomeIcon icon={faGift} style={{ marginRight: 5 }} />
          Apply Coupon
        </button>
      </form>
    </div>
  );
}

export default CartTotal;
