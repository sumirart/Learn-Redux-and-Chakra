export default function CartItem({ item }) {
  const { id, title, price, image } = item;

  // TODO: Edit this function to remove the product from the cart via redux store
  function removeItem() {
    console.log(id);
  }

  // TODO: Edit these functions to increase/decrease the quantity of the product in the cart via redux store
  function decreaseItem() {
    console.log(id);
  }

  // TODO: Edit these functions to increase/decrease the quantity of the product in the cart via redux store
  function increaseItem() {
    console.log(id);
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
              <button onClick={decreaseItem}>-</button>
              <p>0</p> {/* TODO: Edit this */}
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
