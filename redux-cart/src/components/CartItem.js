import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cart/cartSlice";
import "../styles/Cart.css"; // ✅ Import styles

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <p>
        {item.name} (x{item.quantity}) - ${item.price * item.quantity}
      </p>
      <button onClick={() => removeFromCart({ type: "cart/removeFromCart", payload: item })}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
