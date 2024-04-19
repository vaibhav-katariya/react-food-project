import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItem);
  return (
    <div className="px-5">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          quantity={item.quantity}
          totalPrice={item.totalPrice}
          title={item.title}
          image01={item.image01}
          id={item.id}
        />
      ))}
      
    </div>
  );
}
