import { useState } from "react";

import { Link } from "react-router-dom";
import classes from "./RegisterForm.module.css";

import useInput from "../../hook/use-input";

const userArr =
  localStorage.getItem("user") === undefined
    ? localStorage.getItem("user")
    : [];

function RegisterForm() {
  // const [nameInput, setNameInput] = useState("");
  // const [emailInput, setEmailInput] = useState("");
  // const [passInput, setPassInput] = useState("");
  // const [phoneInput, setPhoneInput] = useState("");

  // const [isNameEmpty, setIsNameEmpty] = useState(false);
  // const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  // const [isPhoneEmpty, setIsPhoneEmpty] = useState(false);
  // const [isPasswordLengthNotEnough, setIsPasswordLengthNotEnough] =
  //   useState(false);
  // const [isEmailUsed, setIsEmailUsed] = useState(false);

  // const [isVerified, setIsverified] = useState(true);

  // const nameChangeHandler = (e) => {
  //   setNameInput(e.target.value);
  // };
  // const emailChangeHandler = (e) => {
  //   setEmailInput(e.target.value);
  // };
  // const passChangeHandler = (e) => {
  //   setPassInput(e.target.value);
  // };
  // const phoneChangeHandler = (e) => {
  //   setPhoneInput(e.target.value);
  // };

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value !== "");
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value !== "");
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length >= 8);
  const {
    value: enteredPhone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) => value !== "");

  let formIsValid = false;

  if (nameIsValid && emailIsValid && passwordIsValid && phoneIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log("nice");
    resetNameInput();
    resetEmailInput();
    resetPasswordInput();
    resetPhoneInput();
  };

  // let newUser = {
  //   name: nameInput,
  //   email: emailInput,
  //   password: passInput,
  //   phone: phoneInput,
  // };

  // userArr.push(newUser);
  // console.log(userArr);
  // localStorage.setItem("user", userArr);

  return (
    <div className={classes.RegisterForm}>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <h1>Sign Up</h1>
        <div>
          <input
            placeholder="Full Name"
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          ></input>
          <label htmlFor="name"></label>
          {nameHasError === true && (
            <p className={classes.errorText}>Name must not be empty</p>
          )}
        </div>
        <div>
          <input
            placeholder="Email"
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          ></input>
          <label htmlFor="email"></label>
          {emailHasError && (
            <p className={classes.errorText}>Email must not be empty</p>
          )}
          {/* {isEmailUsed && (
            <p className={classes.errorText}>
              Email has been used! Please choose another Email!!
            </p>
          )} */}
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            id="pass"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          ></input>
          <label htmlFor="pass"></label>
          {passwordHasError && (
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
            onBlur={phoneBlurHandler}
            value={enteredPhone}
          ></input>
          <label htmlFor="phone"></label>
          {phoneHasError && (
            <p className={classes.errorText}>Phone Number must not be empty</p>
          )}
        </div>

        <button disabled={!formIsValid}>SIGN UP</button>
        <p>
          Login? <Link to="/login">Click</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
