import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from '../Redux/slices/wishListSlice'
import  cartSlice  from "./slices/cartSlice";
 

const store = configureStore({
  reducer:{
      Wishlist:  wishlistSlice,
      cartItem : cartSlice
  }
})

export default store 