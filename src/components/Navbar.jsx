import { useState } from "react";
import { useSelector } from "react-redux";

import Cart from "./Cart";

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const total = useSelector((state) => state.cart.total);

  function toggleCart() {
    setShowCart(!showCart);
  }

  return (
    <header className="navigation">
      <div>Shopedia</div>
      <nav>
        <ul className="nav">
          <li className="nav__item">Product</li>
          <li className="nav__item" onClick={toggleCart}>
            {/* TODO: When there's item in the cart, show the total number */}
            {/* e.g.: Cart (7) */}
            Cart {total ? `(${total})` : ""}
          </li>
        </ul>
      </nav>
      <Cart showCart={showCart} toggleCart={toggleCart} />
    </header>
  );
}
