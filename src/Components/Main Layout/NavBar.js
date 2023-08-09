import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
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
          <li>
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
          <li>
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
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <FontAwesomeIcon icon={faUser} />
              <p>Login</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
