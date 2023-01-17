import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "Count",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    changeCount: (state, action) => (state = action.payload),
  },
});

export const { increment, decrement, changeCount } = countSlice.actions;

export default countSlice.reducer;
