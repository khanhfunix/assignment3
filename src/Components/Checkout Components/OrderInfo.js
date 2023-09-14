import classes from "./OrderInfo.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

function OrderInfo() {
  // khai bao redux state cart de hien thi don hang
  const cartItem = useSelector((state) => state.cart.cartItem);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div className={classes.OrderInfo}>
      <h3>YOUR ORDER</h3>
      {cartItem.map((e) => {
        return (
          <div key={e.id} className={classes.OrderInfoContent}>
            <h4>{e.name}</h4>
            <h5>
              {Number(e.totalPrice).toLocaleString("de-DE")} VND x {e.quantity}
            </h5>
          </div>
        );
      })}
      <div className={classes.OrderInfoContent} style={{ border: "none" }}>
        <h4>TOTAL</h4>
        <h3>{Number(totalPrice).toLocaleString("de-DE")}</h3>
      </div>
    </div>
  );
}

export default OrderInfo;
