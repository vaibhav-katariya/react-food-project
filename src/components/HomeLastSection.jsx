import React from "react";

export default function HomeLastSection() {
  return (
    <div className="md:flex px-3 gap-10 min-h-[70vh]">
      <div className="md:w-1/2 w-full mt-20 md:mt-0">
        <img
          src="src/images/ff_3.png"
          alt="Home_banner"
        />
      </div>
      <div className="w-full pt-14 md:w-1/2">
        <h1 className="text-4xl md:text-6xl leading-[4rem] font-semibold mb-10 tracking-tight">
          Best Potatoes For French Fries
        </h1>
        <p className="text-2xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, autem quibusdam quis reiciendis possimus animi accusantium. 
        </p>
      </div>
    </div>
  );
}
