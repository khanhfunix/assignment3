import CheckoutForm from "./CheckoutForm";
import classes from "./Checkout.module.css";
import OrderInfo from "./OrderInfo";

function Checkout() {
  // Component chinh cua checkout page
  return (
    <div className={classes.checkoutWrapper}>
      <h1>BILLING DETAILS</h1>
      <div className={classes.checkOut}>
        <CheckoutForm />
        <OrderInfo />
      </div>
    </div>
  );
}

export default Checkout;
