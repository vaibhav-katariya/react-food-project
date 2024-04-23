import { createSlice } from "@reduxjs/toolkit";

// localStorage.clear()

const initialState = {
  cartItem: JSON.parse(localStorage.getItem("cartItem")) || [],
  qty: JSON.parse(localStorage.getItem("quantity")) || 0,
  price: 0,
  totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      // console.log(newItem);
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.qty++;
        state.cartItem.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
          ...newItem,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(newItem.price) + Number(existingItem.totalPrice);
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      localStorage.setItem("quantity", JSON.stringify(state.qty));
      state.totalPrice = state.cartItem.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      // console.log(state.totalPrice);
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      state.cartItem = state.cartItem.filter((item) => item.id !== id);
      state.qty--;
      if (state.cartItem.length === 0) {
        state.qty = 0;
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      localStorage.setItem("quantity", JSON.stringify(state.qty));
      state.totalPrice = state.cartItem.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      // console.log(state.totalPrice);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItem.find((item) => item.id === payload);
      if (cartItem) {
        cartItem.quantity++;
        cartItem.totalPrice = cartItem.price * cartItem.quantity;
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
        localStorage.setItem("quantity", JSON.stringify(state.qty));
        state.totalPrice = state.cartItem.reduce((total, item) => {
          return total + item.totalPrice;
        }, 0);
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
        // console.log(state.totalPrice);
      }
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItem.find((item) => item.id === payload);
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
        cartItem.totalPrice = cartItem.price * cartItem.quantity;
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
        localStorage.setItem("quantity", JSON.stringify(state.qty));
        state.totalPrice = state.cartItem.reduce((total, item) => {
          return total + item.totalPrice;
        }, 0);
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
        // console.log(state.totalPrice);
      }
    },
  },
});
export const { addToCart, removeCart, deleteItem, increase, decrease } =
  cartSlice.actions;
export default cartSlice;
