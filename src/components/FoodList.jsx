import React, { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import products from "../Fake-Data/Product";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";

function FoodList() {
  const [category, setCategory] = useState("ALL");
  const [product, setProduct] = useState(products);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    if (category === "ALL") {
      setProduct(products);
    }
    if (category === "PIZZA") {
      setProduct(products.filter((item) => item.category === "Pizza"));
    }

    if (category === "BURGER") {
      setProduct(products.filter((item) => item.category === "Burger"));
    }

    if (category === "BREAD") {
      setProduct(products.filter((item) => item.category === "Bread"));
    }
  }, [category]);

  const handleFilterByCategory = (e, selectedOption) => {
    e.preventDefault();
    setCategory(selectedOption);
  };

  return (
    <div className="mt-10 mb-5 min-h-screen w-full">
      <div className="head  text-center">
        <h1 className="text-5xl font-semibold tracking-wider">FOOD ITEM</h1>
        <p className="text-xl font-semibold mt-1 md:mt-0">Our mainstay menu</p>
      </div>
      <div className="listItem mt-14 ">
        <div className="bg-red-500 py-2 md:py-5 text-white flex flex-col md:flex-row items-center justify-center md:gap-20 px-10 w-full md:w-fit mx-auto rounded-3xl md:rounded-full">
          <h3 className="text-xl font-semibold hover:text-red-100 mt-5 md:mt-0">
            <a href="" onClick={(e) => handleFilterByCategory(e, "ALL")}>
              ALL
            </a>
          </h3>
          <h3 className="text-xl font-semibold hover:text-red-100 mt-5 md:mt-0">
            <a href="" onClick={(e) => handleFilterByCategory(e, "PIZZA")}>
              PIZZA
            </a>
          </h3>
          <h3 className="text-xl font-semibold hover:text-red-100 mt-5 md:mt-0">
            <a href="" onClick={(e) => handleFilterByCategory(e, "BURGER")}>
              BURGER
            </a>
          </h3>
          <h3 className="text-xl font-semibold hover:text-red-100 mt-5 md:mt-0">
            <a href="" onClick={(e) => handleFilterByCategory(e, "BREAD")}>
              BREAD
            </a>
          </h3>
        </div>
      </div>
      <div className="md:flex flex-wrap gap-20 justify-center md:mt-24">
        {product.map((item) => (
          <FoodItem
            key={item.id}
            price={item.price}
            name={item.title}
            imgSrc={item.image01}
            id={item.id}
            className=" mt-24 md:mt-14"
            onClick={() => {
              handleAddToCart(item);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodList;
