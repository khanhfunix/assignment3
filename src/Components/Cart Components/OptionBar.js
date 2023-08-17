import { useNavigate } from "react-router-dom";

import classes from "./OptionBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function OptionBar() {
  const navigate = useNavigate();
  const navigateShopHander = () => {
    navigate("/shop");
  };
  const navigateCheckOutHander = () => {
    navigate("/checkout");
  };
  return (
    <div className={classes.option}>
      <button className={classes.btnShop} onClick={navigateShopHander}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: 5 }} />
        Continue Shopping
      </button>
      <button className={classes.btnCheckOut} onClick={navigateCheckOutHander}>
        Proceed to checkout
        <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 5 }} />
      </button>
    </div>
  );
}

export default OptionBar;
