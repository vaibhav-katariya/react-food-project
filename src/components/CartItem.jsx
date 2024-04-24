import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { increase, decrease, deleteItem } from "../store/CartSlice";
import Button from "./Button";
import { MdDeleteOutline } from "react-icons/md";
const CartItem = ({ id, title, image01, quantity, totalPrice }) => {
  const dispatch = useDispatch();
  const handlerInc = (id) => {
    dispatch(increase(id));
  };
  const handlerDec = (id) => {
    dispatch(decrease(id));
  };

  const removeHandler = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <>
      <div className="flex gap-4 mt-10 border-none rounded-xl overflow-hidden bg-zinc-100 shadow-2xl backdrop-blur-xl bg-opacity-45 p-2 w-full md:w-[60%] items-center md:mx-auto min-h-[20vh]">
        <div className="imageDiv md:w-[20%] w-[35%] h-[80%] md:h-full">
          <img
            className="w-full h-full rounded-full object-cover"
            src={image01}
            alt={title}
          />
        </div>
        <div className="contentDiv w-[70%] h-full flex flex-col justify-center md:px-10 ">
          <h2 className="text-xl text-red-500 font-semibold">{title}</h2>
          <div className="Inc_Dec text-lg flex items-center gap-3 mt-2">
            <span onClick={() => handlerInc(id)}>
              <FiPlusCircle />
            </span>
            {quantity}
            <span onClick={() => handlerDec(id)}>
              <FiMinusCircle />
            </span>
          </div>
          <h2 className="text-lg mt-1">
            totalPrice : <span className="text-red-500">${totalPrice}</span>
          </h2>
        </div>
        <Button
          className="rounded-lg hidden md:block"
          onClick={() => removeHandler(id)}
        >
          Remove
        </Button>
        <Button
          className="rounded-lg px-1 block md:hidden"
          onClick={() => removeHandler(id)}
        >
          <MdDeleteOutline />
        </Button>
      </div>
    </>
  );
};

export default CartItem;
