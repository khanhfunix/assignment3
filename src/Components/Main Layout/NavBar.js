import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faCaretDown,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logActions } from "../../store/userlog";
// import { redirect } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.log);

  const logoutHandler = () => {
    dispatch(logActions.logOut());
    // redirect("/");
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
            <NavLink
              to="/order"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <FontAwesomeIcon icon={faList} />
              <p>Order</p>
            </NavLink>
          </li>
          <li className={classes.navItem}>
            {currentUser.token === "" && (
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
            {currentUser.token !== "" && (
              <div>
                <FontAwesomeIcon icon={faUser} />
                <p>{currentUser.fullName}</p>
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
