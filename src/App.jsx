import { useState, useEffect } from "react";

import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);

  // If you want to, fetch the data and put into the store (after the session)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setProducts(json);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h2 className="heading">Shopping Page</h2>
      <div className="products products__container">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
