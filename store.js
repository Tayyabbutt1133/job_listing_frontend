// "use client"
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./app/slices/filter.slice.js";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});
