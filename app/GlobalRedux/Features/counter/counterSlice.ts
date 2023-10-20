'use client';

import { ProductType } from "@/app/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductType[] = []

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProduct: (state, action) => ([...state, action.payload]),
  }
})

export const { addProduct } = counterSlice.actions;
export default counterSlice.reducer;
