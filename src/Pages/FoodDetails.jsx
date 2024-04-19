import React, { useEffect, useState } from "react";
import products from "../Fake-Data/Product";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";
import FoodItem from "../components/FoodItem";
export default function FoodDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const findProduct = products.find((item) => item.id === id);
  const { title, desc, category, image01, image02, image03, price } =
    findProduct;
  const [prevImage, setPrevImage] = useState(image01);
  const [currTab, setCurrTab] = useState("description");
  const [rname, setRname] = useState("");
  const [remail, setREmail] = useState("");
  const [rtext, setRText] = useState("");
  const [relatedProduct, setRelatedProduct] = useState([]);

  const CartHandler = (item) => {
    dispatch(addToCart(item));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(rname, remail, rtext);
  };

  useEffect(() => {
    if (findProduct.category === "Pizza") {
      const filterProduct = products.filter((p) => p.category === "Pizza");
      setRelatedProduct(filterProduct.slice(1, 4));
    }
    if (findProduct.category === "Burger") {
      const filterProduct = products.filter((p) => p.category === "Burger");
      setRelatedProduct(filterProduct.slice(1, 4));
    }
    if (findProduct.category === "Bread") {
      const filterProduct = products.filter((p) => p.category === "Bread");
      setRelatedProduct(filterProduct.slice(1, 4));
    }
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <div className="md:flex px-5 border-none rounded-xl overflow-hidden bg-zinc-100 shadow-2xl backdrop-blur-xl bg-opacity-45 md:px-10 md:mx-10 mx-5 mt-10 md:h-[80vh] min-h-[50vh]">
        <div className="md:w-1/2  md:flex md:flex-row flex items-center justify-between flex-col-reverse  px-10 py-5 overflow-hidden">
          <div className="md:w-[20%] md:h-[100%] flex justify-center md:flex-col gap-1 w-[20vw]">
            <img
              className="object-cover rounded-full"
              onClick={() => setPrevImage(image01)}
              src={image01}
              alt="img"
            />
            <img
              className="object-cover rounded-full"
              onClick={() => setPrevImage(image02)}
              src={image02}
              alt="img"
            />
            <img
              className="object-cover rounded-full"
              onClick={() => setPrevImage(image03)}
              src={image03}
              alt="img"
            />
          </div>
          <div className="md:w-[60%]">
            <img
              className="rounded-full mb-5"
              src={prevImage}
              alt="Food Image"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full py-5 flex justify-center items-center">
          <div className="md;px-10 px-5">
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 pt-10">
              {title}
            </h2>
            <h3 className="mt-5 text-2xl font-semibold">
              Price : <span className="text-red-500">${price}</span>
            </h3>
            <h3 className="mt-5 font-semibold text-2xl">
              Category : <span className="text-red-500"> {category}</span>
            </h3>
            <Button
              className="mt-5 rounded-lg"
              onClick={() => CartHandler(findProduct)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="py-5 border-none rounded-xl overflow-hidden bg-zinc-100 shadow-2xl backdrop-blur-xl bg-opacity-45 mt-5 mx-5 md:mx-10">
        <div className="title_div px-5 flex gap-5 ">
          <h4
            className="text-xl font-semibold"
            onClick={() => setCurrTab("description")}
          >
            Description
          </h4>
          <h4
            className="text-xl font-semibold"
            onClick={() => setCurrTab("Review")}
          >
            Review
          </h4>
        </div>
        <div className="py-5 mt-5">
          {currTab === "description" ? (
            <p className="text-lg px-5">{desc}</p>
          ) : (
            <div className="md:px-10">
              <form>
                <label htmlFor="name" className="font-semibold block px-8 mb-3">
                  Name
                </label>
                <input
                  className="mx-5 px-3 py-2 rounded-lg w-[80%] md:w-1/2 outline-none border-0 placeholder:text-lg"
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  onChange={(e) => setRname(e.target.value)}
                />
                <br />
                <label
                  htmlFor="email"
                  className="font-semibold block px-8 my-3"
                >
                  Email
                </label>
                <input
                  className="mx-5 px-3 py-2 rounded-lg w-[80%] md:w-1/2 outline-none border-0 placeholder:text-lg"
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={(e) => setREmail(e.target.value)}
                />
                <br />
                <label
                  htmlFor="review"
                  className="font-semibold block px-8 my-3"
                >
                  Your review:
                </label>
                <br />
                <textarea
                  className="outline-none p-3 w-[80%] md:w-1/2 mx-5 rounded-lg"
                  name="review"
                  id="review"
                  rows="6"
                  cols="40"
                  placeholder="Write Your Review"
                  onChange={(e) => setRText(e.target.value)}
                ></textarea>
                <Button
                  type="submit"
                  className="block mx-5 mt-5 rounded-lg"
                  onClick={submitHandler}
                >
                  Submit Review
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="py-5 mt-5 mb-5 pb-10 bg-zinc-100 md:mx-10 mx-5 border-none rounded-xl overflow-hidde shadow-2xl backdrop-blur-xl bg-opacity-45">
        <h4 className="font-semibold text-3xl mx-3">Related Product</h4>
        <div className="justify-center mt-5 flex flex-wrap gap-5 ">
          {relatedProduct.map((item) => (
            <FoodItem
              key={item.id}
              imgSrc={item.image01}
              price={item.price}
              name={item.title}
              className="mt-12 md:mt-24"
              onClick={() => CartHandler(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
