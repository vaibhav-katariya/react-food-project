import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-[url('src/images/bg_5.jpg')]  bg-center bg-no-repeat bg-cover bg-zinc-100 w-full text-black">
      <div className="min-h-screen w-full bg-zinc-500  backdrop-filter backdrop-blur-xl bg-opacity-40">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
