import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { logActions } from "../../store/userlog";
import useInput from "../../hook/use-input";

import classes from "./LoginForm.module.css";

function LoginForm() {
  // component hien thi login form
  // khai bao local storage

  // khai bao action va naviga
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // dung customhiook useinput de handle form
  const {
    value: enteredEmail,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    hasError: emailHasError,
  } = useInput((value) => value !== "");
  const {
    value: enteredPassword,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    isValid: passwordIsValid,
    hasError: passwordHasError,
  } = useInput((value) => value.length >= 8);

  let formIsValid = false;
  // dieu kien check form hop le
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  console.log(process.env.REACT_APP_API_ENDPOINT);
  // logic sumbit form
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // logic check email passoowrd
    if (!formIsValid) {
      return;
    }
    const fetchLogin = async function () {
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
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

      const expiration = new Date();
      const expire = expiration.setHours(expiration.getHours() + 1);
      data.expire = expire;
      dispatch(logActions.logIn(data));

      navigate("/");
    };
    fetchLogin();
  };
  return (
    <div className={classes.LoginForm}>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <h1>Sign In</h1>
        <div>
          <input
            placeholder="Email"
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          <label htmlFor="email"></label>
          {emailHasError && (
            <p className={classes.errorText}>Email must not be empty</p>
          )}
        </div>
        <div>
          <input
            placeholder="Password"
            id="pass"
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          <label htmlFor="pass"></label>
          {passwordHasError && (
            <p className={classes.errorText}>
              Password must have more than 8 character
            </p>
          )}
        </div>

        <button disabled={!formIsValid}>Login</button>

        <p>
          Create an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
