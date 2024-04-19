import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function FoodItem({
  id,
  name,
  price,
  description,
  imgSrc,
  className,
  ...props
}) {
  return (
    <div
      className={`relative border-none bg-zinc-100 backdrop-blur-xl bg-opacity-45 w-full md:w-[35vw] lg:w-[25vw] md:h-[71vh] lg:h-[60vh] min-h-[55vh] shadow-2xl rounded-[15vw] md:rounded-[4vw]  ${className}`}
    >
      <div className="absolute top-10 right-[50%] translate-x-[50%] -translate-y-[50%] md:h-[15vw] md:w-[15vw]">
        <Link to={`FoodDetails/${id}`}>
          <img className="rounded-full" src={imgSrc} alt="product_img" />
        </Link>
      </div>
      <div className="cardDetails absolute px-5 md:top-[40%] lg:top-[50%] top-1/2">
        <h3 className="font-semibold text-2xl">{name}</h3>
        <p className=" mt-3 text-lg text-wrap">{description}</p>
        <div className="cardFooter flex justify-between items-center">
          <h3 className="font-semibold text-red-600 text-2xl my-3">{price}$</h3>
          <div
            className=" cursor-pointer text-2xl h-10 w-10 rounded-full bg-red-500 text-white flex justify-center items-center"
            {...props}
          >
            <FaPlus />
          </div>
        </div>
      </div>
    </div>
  );
}
