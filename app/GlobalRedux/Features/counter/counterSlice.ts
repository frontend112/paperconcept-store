'use client';

import { ProductType } from "@/app/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface AddedProduct extends ProductType {
  quantity: number;
}

const initialState: AddedProduct[] = []

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const duplicated = state.find(product => product.id === action.payload.id)

      if (duplicated) {
        const totalQuantity = action.payload.quantity + duplicated.quantity
        const withoutDuplicated = state.filter(product => product.id !== duplicated.id)

        return [
          ...withoutDuplicated,
          { ...action.payload, quantity: totalQuantity }
        ]
      }

      return [...state, action.payload]
    },
    removeProduct: (state, action) => {
      const withoutRemoved = state.filter(product => (
        action.payload.id !== product.id
      ))
      return withoutRemoved
    },
    increaseQuantity: (state, action) => (
      [...state].map(product => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity + 1 }
        }
        return product
      })
    ),
    decreaseQuantity: (state, action) => (
      [...state].map(product => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity - 1 }
        }
        return product
      })
    ),
  }
})

export const {
  addProduct,
  removeProduct,
  increaseQuantity,
  decreaseQuantity } = counterSlice.actions;
export default counterSlice.reducer;