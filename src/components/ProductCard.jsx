import { useDispatch } from "react-redux";
import { add } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    // TODO: Edit this function to add the product to the cart via redux store
    dispatch(add(product));
  }

  return (
    <div className="product">
      <img className="product__image" src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="product__description">{product.description}</p>
      <div className="product__price">
        <strong>${product.price}</strong>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
