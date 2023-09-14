import { Link, useNavigate } from "react-router-dom";
import classes from "./RegisterForm.module.css";

import useInput from "../../hook/use-input";

function RegisterForm() {
  // component hien thi form dang ky
  // kahi bao localstorage
  const userArr = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : [];
  const navigate = useNavigate();
  // Dung custom hook de handle form
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
  // dieu kien check form hop le
  if (nameIsValid && emailIsValid && passwordIsValid && phoneIsValid) {
    formIsValid = true;
  }
  // logic submit form
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    // logic check trung email
    for (let i = 0; i < userArr.length; i++) {
      if (enteredEmail === userArr[i].email) {
        window.alert("Email has been taken! Please choose another Email");
        return;
      }
    }
    let newUser = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      phone: enteredPhone,
    };
    userArr.push(newUser);
    localStorage.setItem("user", JSON.stringify(userArr));
    resetNameInput();
    resetEmailInput();
    resetPasswordInput();
    resetPhoneInput();
    navigate("/login");
  };

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
