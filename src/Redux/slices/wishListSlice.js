import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
  name:'wishList',
  initialState: [],
  reducers : {
    // to add item to the store 
    addWishListItem : (state,action)=> {
      state.push(action.payload)
    },
    removeWishlistItem :(state, action) => {
      return state.filter((item)=> item.id != action.payload)
    }
  }
})

export const {addWishListItem , removeWishlistItem}  = wishlistSlice.actions
export default wishlistSlice.reducer 