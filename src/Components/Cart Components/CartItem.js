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

function CartItem({ image, title, price, quantity, total, id, count }) {
  // comonent hien thi gio hang
  // khai bao state de hien thi gio hang
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [currentTotal, setCurrentTotal] = useState(total);
  // khai bao dispatch action
  const dispatch = useDispatch();
  // logic tang so luong item
  const increaseQuantityHandler = () => {
    if (currentQuantity >= count) {
      window.alert(
        "Not enough product. Please wait until we refill the store or choose another product. Sorry for the inconvinence!!!"
      );
      return;
    }
    setCurrentQuantity((prev) => prev + 1);
    let newCart = {
      image: image,
      id: id,
      title: title,
      price: price,
      quantity: 1,
      totalPrice: currentTotal,
      count: count,
    };
    console.log(id);

    dispatch(cartActions.addCart(newCart));
  };
  // logic giam so luong item
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
      count: count,
    };
    dispatch(cartActions.removeCart(newCart));
  };
  // logic xoa item
  const removeItemHandler = () => {
    dispatch(cartActions.deleteCartItem(id));
  };
  // dung useEffect de hien thi totalPrice
  useEffect(() => {
    setCurrentTotal(price * currentQuantity);
  }, [currentQuantity, price]);

  return (
    <div className={classes.CartItem}>
      <div className={classes.image}>
        <img src={image} alt={title} />
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
        <button onClick={removeItemHandler}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
