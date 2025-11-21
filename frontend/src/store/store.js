"use client";

import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import cartReducer from "./slices/cartSlice";
import filterReducer from "./slices/filterSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartReducer,
    filter: filterReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
