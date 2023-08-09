import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import classes from "./RegisterForm.module.css";

import { registerCheckActions } from "../../store/registerCheck";

const userArr =
  localStorage.getItem("user") === undefined
    ? localStorage.getItem("user")
    : [];

function RegisterForm() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [isVerified, setIsverified] = useState(false);

  const isNameEmpty = useSelector((state) => state.registerCheck.isNameEmpty);
  const isEmailEmpty = useSelector((state) => state.registerCheck.isEmailEmpty);
  const isPhoneEmpty = useSelector((state) => state.registerCheck.isPhoneEmpty);
  const isPasswordLengthEnough = useSelector(
    (state) => state.registerCheck.isPasswordLengthEnough
  );
  const isEmailUsed = useSelector((state) => state.registerCheck.isEmailUsed);

  const dispatch = useDispatch();

  const nameChangeHandler = (e) => {
    setNameInput(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmailInput(e.target.value);
  };
  const passChangeHandler = (e) => {
    setPassInput(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhoneInput(e.target.value);
  };

  const clickHandler = (e) => {};

  const submitHandler = (e) => {
    e.preventDefault();

    nameInput === ""
      ? dispatch(registerCheckActions.nameIsEmpty())
      : dispatch(registerCheckActions.nameIsNotEmpty());
    emailInput === ""
      ? dispatch(registerCheckActions.emailIsEmpty())
      : dispatch(registerCheckActions.emailIsNotEmpty());
    phoneInput === ""
      ? dispatch(registerCheckActions.phoneIsEmpty())
      : dispatch(registerCheckActions.phoneIsNotEmpty());
    passInput.length < 8
      ? dispatch(registerCheckActions.passwordNotVerified())
      : dispatch(registerCheckActions.passwordVerifed());
    dispatch(registerCheckActions.emailNotUsed());

    for (let i = 0; i < userArr.length; i++) {
      if (emailInput === userArr[i].email) {
        dispatch(registerCheckActions.emailUsed());

        break;
      }
    }
    !isNameEmpty &&
      !isPhoneEmpty &&
      !isEmailEmpty &&
      !isPasswordLengthEnough &&
      !isEmailUsed &&
      setIsverified(true);
    console.log(
      isNameEmpty,
      isEmailEmpty,
      isPhoneEmpty,
      isPasswordLengthEnough,
      isEmailUsed,
      isVerified
    );
    let newUser = {
      name: nameInput,
      email: emailInput,
      password: passInput,
      phone: phoneInput,
    };

    isVerified && userArr.push(newUser);
    console.log(userArr);
    localStorage.setItem("user", userArr);

    setIsverified(false);
  };

  return (
    <div className={classes.RegisterForm}>
      <form onSubmit={submitHandler} className={classes.form}>
        <h1>Sign Up</h1>
        <div>
          <input
            placeholder="Full Name"
            type="text"
            id="name"
            onChange={nameChangeHandler}
            value={nameInput}
          ></input>
          <label htmlFor="name"></label>
          {isNameEmpty && (
            <p className={classes.errorText}>Name must not be empty</p>
          )}
        </div>
        <div>
          <input
            placeholder="Email"
            type="email"
            id="email"
            onChange={emailChangeHandler}
            value={emailInput}
          ></input>
          <label htmlFor="email"></label>
          {isEmailEmpty && (
            <p className={classes.errorText}>Email must not be empty</p>
          )}
          {isEmailUsed && (
            <p className={classes.errorText}>
              Email has been used! Please choose another Email!!
            </p>
          )}
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            id="pass"
            onChange={passChangeHandler}
            value={passInput}
          ></input>
          <label htmlFor="pass"></label>
          {isPasswordLengthEnough && (
            <p className={classes.errorText}>
              Password must have more than 8 character
            </p>
          )}
        </div>
        <div>
          <input
            placeholder="Phone Number"
            type="number"
            id="phone"
            onChange={phoneChangeHandler}
            value={phoneInput}
          ></input>
          <label htmlFor="phone"></label>
          {isPhoneEmpty && (
            <p className={classes.errorText}>Phone Number must not be empty</p>
          )}
        </div>

        <button onClick={clickHandler}>SIGN UP</button>
        <p>
          Login? <Link to="/login">Click</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
