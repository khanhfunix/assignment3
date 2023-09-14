import classes from "./CheckoutForm.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch } from "react-redux";

function CheckoutForm() {
  // component hien thi form 
  // khai bao dispatch action
  const dispatch = useDispatch();
  // logic submit form
  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(cartActions.deleteCart());
  };
  return (
    <div className={classes.checkoutForm}>
      <form onSubmit={submitFormHandler}>
        <div>
          <h4>FULL NAME :</h4>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Full Name here"
          ></input>
        </div>
        <div>
          <h4>EMAIL :</h4>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email here"
          ></input>
        </div>
        <div>
          <h4>PHONE NUMBER :</h4>
          <input
            type="number"
            id="phone"
            placeholder="Enter Your Phone Here"
          ></input>
        </div>
        <div>
          <h4>ADDRESS :</h4>
          <input
            type="text"
            id="address"
            placeholder="Enter Your Address Here"
          ></input>
        </div>
        <button>Place Order</button>
      </form>
      ;
    </div>
  );
}

export default CheckoutForm;
