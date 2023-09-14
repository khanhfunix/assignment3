import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { logActions } from "../../store/userlog";
import useInput from "../../hook/use-input";

import classes from "./LoginForm.module.css";

function LoginForm() {
  // component hien thi login form
  // khai bao local storage
  const userArr = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : [];

  let activeUser = localStorage.getItem("active")
    ? JSON.parse(localStorage.getItem("active"))
    : {};

  // khai bao action va naviga
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // dung customhiook useinput de handle form
  const { value: enteredEmail, valueChangeHandler: emailChangeHandler } =
    useInput((value) => value);
  const { value: enteredPassword, valueChangeHandler: passwordChangeHandler } =
    useInput((value) => value);
  // logic sumbit form
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // logic check email passoowrd
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
