import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import classes from "./PopUp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const PopUp = ({ product, onClose }) => {
  const ref = useRef();

  const checkIfClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={classes.modalPopUp} onClick={checkIfClickOutside}>
      <div className={classes.popUp} ref={ref}>
        <img src={product.img1} alt={product.name}></img>
        <div className={classes.popUpContent}>
          <h3>{product.name}</h3>
          <h5>{Number(product.price).toLocaleString("de-DE")}</h5>
          <p>{product.long_desc}</p>
          <button className={classes.btnDetail}>
            <FontAwesomeIcon icon={faCartShopping} />
            View Detail
          </button>
        </div>
        <button className={classes.btnClose} onClick={onClose}>
          X
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default PopUp;
