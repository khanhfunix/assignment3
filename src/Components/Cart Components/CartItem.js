import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart";

import classes from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function CartItem({ image, title, price, quantity, total, id }) {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [currentTotal, setCurrentTotal] = useState(total);

  const dispatch = useDispatch();

  const increaseQuantityHandler = () => {
    setCurrentQuantity((prev) => prev + 1);
    let newCart = {
      image: image,
      id: id,
      title: title,
      price: price,
      quantity: 1,
      totalPrice: currentTotal,
    };

    dispatch(cartActions.addCart(newCart));
  };

  const decreaseQuantityHandler = () => {
    setCurrentQuantity((prev) => {
      if (prev === 0) {
        return (prev = 0);
      } else {
        return prev - 1;
      }
    });
    if (currentQuantity === 0) {
      return;
    }

    let newCart = {
      image: image,
      id: id,
      title: title,
      price: price,
      quantity: 1,
      totalPrice: currentTotal,
    };
    dispatch(cartActions.removeCart(newCart));
  };

  useEffect(() => {
    setCurrentTotal(price * currentQuantity);
  }, [currentQuantity]);

  return (
    <div className={classes.CartItem}>
      <div className={classes.image}>
        <img src={image} />
      </div>
      <div className={classes.title}>{title}</div>
      <div className={classes.price}>
        {Number(price).toLocaleString("de-DE")} VND
      </div>
      <div className={classes.quantity}>
        <button onClick={decreaseQuantityHandler}>
          <FontAwesomeIcon icon={faCaretLeft} style={{ marginRight: 5 }} />
        </button>
        <span>{currentQuantity}</span>
        <button onClick={increaseQuantityHandler}>
          <FontAwesomeIcon icon={faCaretRight} style={{ marginLeft: 5 }} />
        </button>
      </div>
      <div className={classes.total}>
        <span>{Number(currentTotal).toLocaleString("de-DE")} VND</span>
      </div>
      <div className={classes.removeBtn}>
        <button>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
