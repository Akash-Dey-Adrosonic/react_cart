import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import SummaryCart from "./components/SummaryCart";
import data from "./data";
import DummyPagination from "./components/DummyPagination";
import { useState } from "react";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      // console.log(product);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      // console.log(product);
    }
  };

  const onSubtract = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  };

  const onClearCart = () => setCartItems([]);

  return (
    <div>
      <Header />
      <Main
        onAdd={onAdd}
        onSubtract={onSubtract}
        products={products}
        cartItems={cartItems}
      />
      <DummyPagination />
      <SummaryCart
        onAdd={onAdd}
        onSubtract={onSubtract}
        onRemove={onRemove}
        cartItems={cartItems}
        onClearCart={onClearCart}
      />
    </div>
  );
};

export default App;
