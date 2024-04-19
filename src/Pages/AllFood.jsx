import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import products from "../Fake-Data/Product";
import FoodItem from "../components/FoodItem";
import { addToCart } from "../store/CartSlice";
import { useDispatch } from "react-redux";
export default function AllFood() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const productPerPage = 5;
  const visitedProductPage = currentPage * productPerPage;

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }
    if (
      selectedPrice !== "all" &&
      (selectedPrice === "Low to high"
        ? product.price > 50
        : product.price <= 50)
    ) {
      return false;
    }
    return true;
  });

  const displayProduct = filteredProducts.slice(
    visitedProductPage,
    visitedProductPage + productPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / productPerPage);
  const dispatch = useDispatch();

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(0); // Reset page to 0 when category changes
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    setCurrentPage(0); // Reset page to 0 when price changes
  };

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="w-[80%] md:px-10 flex justify-between m-auto mt-10 py-5">
        <div>
          <select
            name="catagory"
            id="catagory"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">All Catagories</option>
            <option value="Pizza">Pizza</option>
            <option value="Burger">Burger</option>
            <option value="Bread">Bread</option>
          </select>
        </div>
        <div>
          <select
            name="price"
            id="price"
            value={selectedPrice}
            onChange={handlePriceChange}
          >
            <option value="all">all</option>
            <option value="Low to high">Low to high</option>
            <option value="High to low">High to low</option>
          </select>
        </div>
      </div>
      <div className="md:flex flex-wrap gap-20 justify-center px-5 md:mt-24">
        {displayProduct.map((item) => (
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
      <div className="mt-10">
        <div className="mt-10 flex justify-center">
          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            onPageChange={changePage}
            pageCount={totalPages}
            previousLabel="< "
            renderOnZeroPageCount={null}
            containerClassName="flex"
            pageClassName="mx-3"
            activeClassName="font-bold"
            previousLinkClassName="px-3 py-1 border rounded-xl bg-gray-200 hover:bg-gray-300 mr-2"
            nextLinkClassName="px-3 py-1 border rounded-xl bg-gray-200 hover:bg-gray-300 ml-2"
            disabledClassName="opacity-30 cursor-not-allowed"
          />
        </div>
      </div>
    </div>
  );
}
