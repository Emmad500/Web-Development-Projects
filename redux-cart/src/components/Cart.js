import React from "react";
import { useEffect } from "react";
import { resetCart } from "../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cart/cartSlice";
import CartItem from "./CartItem";
import "../styles/Cart.css"; // ✅ Import styles

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCart()); // Reset cart on page load
  }, [dispatch]);
  

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={dispatch} />
          ))}
        </div>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
