import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    removeData: (state, action) => {
      state.data = state.data.filter((elem) => elem._id !== action.payload);
    },
  },
});

export const { addData, removeData } = wishlistSlice.actions;

export default wishlistSlice.reducer;
