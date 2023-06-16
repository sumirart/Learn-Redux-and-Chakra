import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "./features/product/productSlice";

import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  // console.log(products);
  // console.log(productStatus);
  // console.log(error);
  // const [products, setProducts] = useState([]);

  // If you want to, fetch the data and put into the store (after the session)
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       // console.log(json);
  //       setProducts(json);
  //     });
  // }, []);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
    console.log("useEffect run");
  }, [productStatus, dispatch]);

  let content;

  if (productStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (productStatus === "succeeded") {
    content = products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ));
  } else if (productStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <h2 className="heading">Shopping Page</h2>
      <div className="products products__container">{content}</div>
    </div>
  );
}

export default App;
