import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
export default function HomeBanner() {
  return (
    <div className="md:flex px-4 mt-10 w-full min-h-[70vh]">
      <div className="w-full my-12  md:w-1/2 font-[src/fonts/Sunflower/Sunflower-Medium.ttf]">
        <h1 className="text-5xl md:text-6xl leading-[4rem] font-semibold mb-10 tracking-tight">
          <span className="text-red-600">Delicious</span> Food Is Waiting For
          You{" "}
        </h1>
        <p className="text-2xl font-semibold">
          Our team of registered nurses and skilled healthcare professionals
          provide in-home nursing
        </p>
        <div className="buttons flex gap-8 mt-14">
          <Button className="text-sm md:text-lg">
            <Link to="AllFood">All Foods</Link>
          </Button>
          <Button
            className="bg-transparent border-red-500 border-[2px] text-sm md:text-lg"
            textColor="text-red-500"
          >
            Order Now
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="src/images/hb.png"
          className="drop-shadow-2xl rounded-2xl md:rounded-full"
          alt="banner_img"
        />
      </div>
    </div>
  );
}
