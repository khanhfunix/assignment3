import classes from "./CheckoutForm.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hook/use-input";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const cartItem = useSelector((state) => state.cart.cartItem);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const currentUser = useSelector((state) => state.log);

  const navigate = useNavigate();

  const {
    value: enteredFullName,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
  } = useInput((value) => value !== "");
  const {
    value: enteredEmail,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    hasError: emailHasError,
  } = useInput((value) => value !== "");
  const {
    value: enteredPhone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput((value) => value !== "");
  const {
    value: enteredAddress,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
  } = useInput((value) => value !== "");

  let formIsValid = false;
  if (
    fullNameIsValid &&
    emailIsValid &&
    phoneIsValid &&
    addressIsValid &&
    cartItem.length > 0
  ) {
    formIsValid = true;
  }
  // component hien thi form
  // khai bao dispatch action
  const dispatch = useDispatch();
  // logic submit form
  console.log(process.env.REACT_APP_API_ENDPOINT);
  const submitFormHandler = (e) => {
    e.preventDefault();

    const fetchCreateOrder = async function () {
      console.log(currentUser.token);
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}order/create`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + currentUser.token,
          },
          body: JSON.stringify({
            fullName: enteredFullName,
            email: enteredEmail,
            phoneNumber: enteredPhone,
            address: enteredAddress,
            userId: currentUser.userId,
            cart: cartItem,
            totalPrice,
          }),
        }
      );
      if (response.status === 422) {
        window.alert("Validation failed.");
      }
      if (response.status !== 200 && response.status !== 201) {
        window.alert("Could not authenticate you!");
      }
      const data = await response.json();
      window.alert(data.message);
      dispatch(cartActions.deleteCart());
      navigate("/order");
    };
    fetchCreateOrder();
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
            value={enteredFullName}
            onChange={fullNameChangeHandler}
            onBlur={fullNameBlurHandler}
          ></input>
          {fullNameHasError && (
            <p className={classes.errorText}>fullName must not be empty !</p>
          )}
        </div>
        <div>
          <h4>EMAIL :</h4>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email here"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          ></input>
          {emailHasError && (
            <p className={classes.errorText}>email must not be empty !</p>
          )}
        </div>
        <div>
          <h4>PHONE NUMBER :</h4>
          <input
            type="number"
            id="phone"
            placeholder="Enter Your Phone Here"
            value={enteredPhone}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
          ></input>
          {phoneHasError && (
            <p className={classes.errorText}>phone must not be empty !</p>
          )}
        </div>
        <div>
          <h4>ADDRESS :</h4>
          <input
            type="text"
            id="address"
            placeholder="Enter Your Address Here"
            value={enteredAddress}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
          ></input>
          {addressHasError && (
            <p className={classes.errorText}>address must not be empty !</p>
          )}
        </div>
        <button disabled={!formIsValid}>Place Order</button>
      </form>
      ;
    </div>
  );
}

export default CheckoutForm;
