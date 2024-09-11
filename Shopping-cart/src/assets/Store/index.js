import { configureStore } from "@reduxjs/toolkit";
// configureStore: هذه الدالة تأتي من Redux Toolkit
// تستخدم لإنشاء المتجر الذي يجمع جميع الـ reducers الخاصة بالتطبيق.

//================================================
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});
