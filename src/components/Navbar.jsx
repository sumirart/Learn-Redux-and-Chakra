import { useState } from "react";
import Cart from "./Cart";

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);

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
            Cart
          </li>
        </ul>
      </nav>
      <Cart showCart={showCart} toggleCart={toggleCart} />
    </header>
  );
}
