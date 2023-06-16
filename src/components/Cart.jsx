import { useSelector } from "react-redux";
import { selectCart } from "../features/cart/cartSlice";

import CartItem from "./CartItem";

export default function Cart({ showCart, toggleCart }) {
  const cartItems = useSelector((state) => state.cart.products);
  // We can get data from store like above line or write selector function like "selectCart"
  // (see src/features/cart/cartSlice.js) and use it like this:
  // const cart = useSelector(selectCart);

  // We can get quantity here and pass as props to <CartItem /> or we move this line to <CartItem />
  const quantityList = useSelector((state) => state.cart.quantity);

  // TODO: Delete this and get from the store
  // const cartItems = [];

  return (
    <div className={`cart ${showCart && "cart--visible"}`}>
      <div className="cart__header">
        <h3>Cart</h3>
        <p className="cart__close" onClick={toggleCart}>
          X
        </p>
      </div>
      {cartItems.length < 1 && <p>Your cart is empty.</p>}
      {/* TODO: Update this if you need to */}
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <CartItem
            item={item}
            key={item.id}
            quantity={quantityList[item.id]}
          />
        ))}
    </div>
  );
}
