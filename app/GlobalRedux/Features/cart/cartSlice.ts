"use client";

import { AddedProduct } from "@/app/types/types";
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

        return [
          ...withoutDuplicated,
          { ...action.payload, quantity: totalQuantity },
        ];
      }

      return [...state, action.payload];
    },
    removeProduct: (state, action) =>
      state.filter((product) => action.payload.id !== product.id),
    increaseQuantity: (state, action) =>
      [...state].map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      }),
    decreaseQuantity: (state, action) =>
      [...state].map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      }),
    clearCart: () => [],
  },
});

export const {
  addProduct,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;