"use client";

import { AddedProduct, ProductType } from "@/app/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AddedProduct[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const duplicated = state.find(
        (product) => product.id === action.payload.id
      );

      if (duplicated) {
        const totalQuantity = action.payload.quantity + duplicated.quantity;
        const withoutDuplicated = state.filter(
          (product) => product.id !== duplicated.id
        );
        const newProducts = [
          ...withoutDuplicated,
          { ...action.payload, quantity: totalQuantity },
        ];
        localStorage.setItem("cart", JSON.stringify(newProducts));
        return newProducts;
      }
      const newProducts = [...state, action.payload];
      localStorage.setItem("cart", JSON.stringify(newProducts));
      return newProducts;
    },

    removeProduct: (state, action) => {
      const newProducts = state.filter(
        (product) => action.payload.id !== product.id
      );
      localStorage.setItem("cart", JSON.stringify(newProducts));
      return newProducts;
    },

    increaseQuantity: (state, action) => {
      const newProducts = [...state].map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      localStorage.setItem("cart", JSON.stringify(newProducts));
      return newProducts;
    },

    decreaseQuantity: (state, action) => {
      const newProducts = [...state].map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      localStorage.setItem("cart", JSON.stringify(newProducts));
      return newProducts;
    },
    clearCart: () => {
      localStorage.clear();
      return [];
    },
    getCart: () => JSON.parse(localStorage.getItem("cart") || "{}"),
  },
});

export const {
  addProduct,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  getCart,
} = cartSlice.actions;

export default cartSlice.reducer;
