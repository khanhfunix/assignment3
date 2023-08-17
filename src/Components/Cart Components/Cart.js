import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../../store/cart";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import HeaderList from "./HeaderList";
import OptionBar from "./OptionBar";

import classes from "./Cart.module.css";

function Cart() {
  const cartItem = useSelector((state) => state.cart.cartItem);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log(totalPrice);
  return (
    <div className={classes.CartWrapper}>
      <h1>Shopping Cart</h1>
      <div className={classes.CartContent}>
        <div className={classes.listContent}>
          <HeaderList />
          {cartItem.map((e) => {
            return (
              <CartItem
                key={e.id}
                image={e.image}
                title={e.name}
                price={e.price}
                quantity={e.quantity}
                total={e.totalPrice}
                id={e.id}
              />
            );
          })}
        </div>
        <CartTotal total={totalPrice} />
      </div>
      <OptionBar />
    </div>
  );
}

export default Cart;
