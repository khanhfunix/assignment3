import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { logActions } from "../../store/userlog";
import useInput from "../../hook/use-input";

import classes from "./LoginForm.module.css";

const userArr = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : [];

let activeUser = localStorage.getItem("active")
  ? JSON.parse(localStorage.getItem("active"))
  : {};

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value);
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    activeUser = userArr.find((e) => {
      return enteredPassword === e.password && enteredEmail === e.email;
    });
    if (activeUser === undefined) {
      window.alert("Wrong Email or Password !!!");
      return;
    }
    localStorage.setItem("active", JSON.stringify(activeUser));
    dispatch(logActions.logIn());
    navigate("/");
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
          />
        </div>
        <div>
          <input
            placeholder="Password"
            id="pass"
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>

        <button>Login</button>

        <p>
          Create an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
