import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const login = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const name = document.getElementById("name");
      resolve(name.value);
    }, 500);
  });

export const loginAction = createAsyncThunk("auth/login", async () => {
  return await login();
});

const auth = createSlice({
  name: "auth",
  initialState: "(Your name)",
  extraReducers: (builder) =>
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    }),
});
export default auth.reducer;
