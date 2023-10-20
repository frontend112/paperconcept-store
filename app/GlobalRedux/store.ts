'use client';

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
