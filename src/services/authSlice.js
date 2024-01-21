import { createSlice } from "@reduxjs/toolkit";
// import { PURGE } from "redux-persist";

const initialState = {
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    logOut: (state) => {
      state.accessToken = null;
    },
  },
});

export const { setToken, logOut } = authSlice.actions;
export default authSlice.reducer;
