import { useDispatch } from "react-redux";
import { add, decrease, remove } from "../features/cart/cartSlice";

export default function CartItem({ item, quantity }) {
  const { id, title, price, image } = item;
  const dispatch = useDispatch();

  // TODO: Edit this function to remove the product from the cart via redux store
  function removeItem() {
    dispatch(remove({ id }));
    // console.log(id);
  }

  // TODO: Edit these functions to increase/decrease the quantity of the product in the cart via redux store
  function decreaseItem() {
    dispatch(decrease({ id }));
    // console.log(id);
  }

  // TODO: Edit these functions to increase/decrease the quantity of the product in the cart via redux store
  function increaseItem() {
    dispatch(add({ id }));
    // console.log(id);
  }

  return (
    <>
      <div className="cart__item">
        <img src={image} alt={title} className="cart__item__image" />
        <div className="cart__item__info">
          <h4>{title}</h4>
          <p>${price}</p>
          <div className="cart__item__action">
            <div className="cart__item__count">
              {/* TODO: If item is 1, disable the decrease button */}
              {/* <button disabled onClick... /> */}
              <button onClick={decreaseItem} disabled={quantity < 2}>
                -
              </button>
              <p>{quantity}</p> {/* TODO: Edit this */}
              <button onClick={increaseItem}>+</button>
            </div>
            <button className="btn btn--remove" onClick={removeItem}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <hr className="cart__item__divider" />
    </>
  );
}
