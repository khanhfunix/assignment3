import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logActions } from "../../store/userlog";

function NavBar() {
  let activeUser = localStorage.getItem("active")
    ? JSON.parse(localStorage.getItem("active"))
    : {};

  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.log.isLogged);
  console.log(activeUser);

  const logoutHandler = () => {
    dispatch(logActions.logOut());
    localStorage.removeItem("active");
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>
        <h1>Boutique</h1>
        <ul className={classes.list}>
          <li className={classes.navItem}>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <p>Cart</p>
            </NavLink>
          </li>
          <li className={classes.navItem}>
            {!isLogged && (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <FontAwesomeIcon icon={faUser} />
                <p>Login</p>
              </NavLink>
            )}
            {isLogged && (
              <div>
                <FontAwesomeIcon icon={faUser} />
                <p>{activeUser.name}</p>
                <FontAwesomeIcon icon={faCaretDown} />
                <button onClick={logoutHandler}>( Logout )</button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
