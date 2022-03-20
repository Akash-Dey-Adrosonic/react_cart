import React from "react";
import FormatPrice from "../Utils/FormatPrice";
import "./SummaryCart.css";
const SummaryCart = (props) => {
  const { cartItems, onAdd, onSubtract, onRemove, onClearCart } = props;
  console.log(props.cartItems.length);
  //   const [cartSummary, setCartSummary] = useState([...cartItems]);
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalQuantity = cartItems.reduce((a, c) => a + c.qty, 0);

  //   const onClearCart = () => {
  //     console.log(cartSummary);
  //   };
  return (
    <div className="summaryCartRow">
      <div>
        {cartItems.length === 0 && (
          <h3 style={{ textAlign: "center" }}>Cart is Empty !</h3>
        )}
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="summaryCart-Flex1">
          <div className="flexCol">
            <button onClick={() => onRemove(item)} className="crossBtn">
              X
            </button>
          </div>
          <div className="flexCol">
            <p>{item.model_name}</p>
          </div>
          <div className="flexCol">
            <p>
              {item.qty} X &nbsp;{item.price_type}
              &nbsp;{FormatPrice(item.price)}
            </p>
          </div>
          <div className="flexCol">
            <p>
              {item.price_type}&nbsp;{FormatPrice(item.qty * item.price)}
            </p>
          </div>
          <div className="flexCol">
            <button onClick={() => onSubtract(item)} className="addSubBtn">
              -
            </button>
            <button onClick={() => onAdd(item)} className="addSubBtn">
              +
            </button>
          </div>
        </div>
      ))}

      {cartItems.length !== 0 && (
        <div>
          <hr />
          <div className="totalSummaryFlex">
            <div className="totalSummaryCol"></div>
            <div className="flexTotal totalSummaryCol">
              <h3>Total</h3>
            </div>
            <div className="totalSummaryCol">
              <p>Quantity:&nbsp;{totalQuantity}</p>
            </div>
            <div className="totalSummaryCol">
              <p>$&nbsp;{FormatPrice(totalPrice)}</p>
            </div>
            <div className="totalSummaryCol">
              <button className="clearCartBtn" onClick={onClearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryCart;
