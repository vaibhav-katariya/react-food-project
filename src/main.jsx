import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/Store";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import FoodDetails from "./Pages/FoodDetails.jsx";
import Cart from "./Pages/Cart.jsx";
import CheckOut from "./Pages/CheckOut.jsx";
import Contact from "./Pages/Contact.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import AllFood from "./Pages/AllFood.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/CheckOut" element={<CheckOut />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/AllFood" element={<AllFood />} />
      <Route path="/FoodDetails/:id" element={<FoodDetails />} />
      <Route path="/AllFood/FoodDetails/:id" element={<FoodDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
