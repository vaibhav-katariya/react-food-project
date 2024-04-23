import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const price = useSelector((state) => state.cart.totalPrice);
  return (
    <div className="px-5">
      {cartItems == "" ? (
        <div className="flex p-2 items-center justify-start md:ms-[20%] w-fit mt-10 border-none
        rounded-xl overflow-hidden bg-zinc-100 shadow-2xl backdrop-blur-xl
         bg-opacity-45 gap-3">
          <h1 className="text-xl">cart is empty</h1>
        </div>
      ) : (
        <div>
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
      )}

      <div className="flex p-2 items-center justify-start md:ms-[20%] w-fit mt-10 border-none
       rounded-xl overflow-hidden bg-zinc-100 shadow-2xl backdrop-blur-xl
        bg-opacity-45 gap-3">
        <h1 className="text-xl">Total Amount</h1>
        <Button className="rounded-lg"> $ {price}</Button>
      </div>
    </div>
  );
}
