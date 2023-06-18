import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchProducts,
  selectAllProducts,
} from "./features/product/productSlice";

import { useEffectOnce } from "./hooks/useEffectOnce";

import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  // It will give you error "duplicate keys" because useEffect run 2 times and it fetch 2 times
  // This is because React StrictMode in index.js
  // Just leave it for now, when we build the app, StrictMode will be removed
  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  // Alternatives if we want run effect just once, we can create custom hooks like this
  //
  // useEffectOnce(() => {
  //   if (productStatus === "idle") {
  //     dispatch(fetchProducts());
  //   }
  // });

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
