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
    addProduct: (state, action) => ([...state, action.payload]),
  }
})

export const { addProduct } = counterSlice.actions;
export default counterSlice.reducer;
