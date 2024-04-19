import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
export default function Header() {
  const qty = useSelector((state) => state.cart.qty);

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menu]);

  const menuShowHandler = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };
  return (
    <div className="p-4 px-10 flex z-[999] justify-between items-center">
      <h1 className="text-red-500 text-2xl z-[99] uppercase font-semibold">
        FOOD<span className="text-red-700">EAT</span>
      </h1>
      <div
        className={`links absolute z-[90] bg-red-300 md:bg-transparent left-0 h-[100vh] md:h-auto flex flex-col md:flex-row items-center justify-center overflow-hidden top-0 w-[60%] md:w-auto md:static md:flex gap-10 uppercase ${
          menu === false ? " -translate-x-[100vw] duration-200" : "duration-200 translate-x-0 "
        } md:translate-x-0`}
      >
        <NavLink
          to=""
          className={({ isActive }) =>
            `text-black duration-200 ${
              isActive ? "text-red-500" : "text-black"
            } font-semibold text-md md:flex `
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/AllFood"
          className={({ isActive }) =>
            `text-black duration-200 ${
              isActive ? "text-red-500" : "text-black"
            } font-semibold text-md md:flex `
          }
        >
          Foods
        </NavLink>
        <NavLink
          to="/Cart"
          className={({ isActive }) =>
            `text-black duration-200 ${
              isActive ? "text-red-500" : "text-black"
            } font-semibold text-md md:flex `
          }
        >
          Cart
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            `text-black duration-200 ${
              isActive ? "text-red-500" : "text-black"
            } font-semibold text-md md:flex `
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="icons flex gap-3 font-semibold text-lg">
        <div className=" relative">
          <Link to='/Cart'><FiShoppingCart /></Link>
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-3 -end-3">
            {qty}
          </div>
        </div>
        <div>
          <FaRegUser />
        </div>
        <Link onClick={menuShowHandler} className="md:hidden">
          {menu === true ? <AiOutlineClose /> : <AiOutlineMenu />}
        </Link>
      </div>
    </div>
  );
}
