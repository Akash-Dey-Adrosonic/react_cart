import React from "react";
import "./Main.css";
import FormatPrice from "../Utils/FormatPrice";
const Main = (props) => {
  const { products, onAdd, onSubtract, cartItems } = props;
  console.log(props);
  // const exist = cartItems.find((x) => x.id === product.id);
  return (
    <div className="productRow">
      <div className="productList">
        {products.map((product) => (
          <div key={product.id} className="productCard">
            <div className="productFlex-1">
              <h3>{product.name}</h3>
              {product.isAvailable ? (
                <p>
                  {product.price_type}&nbsp;{FormatPrice(product.price)}
                </p>
              ) : (
                <p>Unavailable</p>
              )}
            </div>
            <div className="productFlex-2">
              <p>{product.model_name}</p>
              {cartItems.find((x) => x.id === product.id) ? (
                <div>
                  <button
                    onClick={() => onSubtract(product)}
                    className="addSubBtn"
                  >
                    -
                  </button>
                  <button onClick={() => onAdd(product)} className="addSubBtn">
                    +
                  </button>
                </div>
              ) : (
                <div>
                  {product.isAvailable ? (
                    <button
                      className="addToCart-btn "
                      onClick={() => onAdd(product)}
                    >
                      Add To Cart
                    </button>
                  ) : (
                    <button
                      disabled
                      className="addToCart-btn disabled"
                      onClick={() => onAdd(product)}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
