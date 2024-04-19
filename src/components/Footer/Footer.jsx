import React from "react";

export default function Footer() {
  return (
    <div className="pb-10 pt-5 mt-10 px-10 w-full md:flex border-t-[1px] border-zinc-400">
      <div className="Logo pt-5 w-full md:w-1/4">
        <h1 className="text-red-500 text-3xl z-[99]  uppercase font-semibold">
          FOOD<span className="text-red-700">EAT</span>
        </h1>
      </div>
      <div className="w-full md:w-1/4 pt-5">
        <h2 className="font-bold text-3xl">Our services</h2>
        <div className="mt-6">
          <p className="mt-2 font-semibold">Pricing</p>
          <p className="mt-2 font-semibold">Tracking</p>
          <p className="mt-2 font-semibold">Report a Bug</p>
          <p className="mt-2 font-semibold">Terms of serices</p>
        </div>
      </div>
      <div className="w-full md:w-1/4 pt-5">
        <h2 className="font-bold text-3xl">Our Company</h2>
        <div className="mt-6">
          <p className="mt-2 font-semibold">Reporting</p>
          <p className="mt-2 font-semibold">Get in Touch</p>
          <p className="mt-2 font-semibold">Management</p>
        </div>
      </div>
      <div className="w-full md:w-1/4 pt-5">
        <h2 className="font-bold text-3xl">Address</h2>
        <div className="mt-6">
          <p className="mt-2 font-semibold">121 king st,</p>
          <p className="mt-2 font-semibold">VIC3000, US</p>
          <p className="mt-2 font-semibold">info@example.com</p>
        </div>
      </div>
    </div>
  );
}
