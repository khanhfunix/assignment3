import { useState } from "react";

import { Link } from "react-router-dom";

import Input from "../UI/Input";
import classes from "./LoginForm.module.css";

const userArr =
  localStorage.getItem("user") === undefined
    ? localStorage.getItem("user")
    : [];

function LoginForm() {
  console.log(userArr);
  return (
    <div className={classes.LoginForm}>
      <form className={classes.form}>
        <h1>Sign In</h1>
        <Input placeholder={"Email"} type={"email"} id={"email"} />
        <Input placeholder={"Password"} id={"pass"} />

        <button>Login</button>

        <p>
          Create an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
