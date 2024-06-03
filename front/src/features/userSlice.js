import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSucces: (state, action) => {
      state.isLogged = true;
      state.user = action.payload;
      state.error = null;
    },

    loginError: (state, action) => {
      state.isLogged = false;
      state.user = false;
      state.error = action.payload;
    },
    logOut: (state) => {
      state.isLogged = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginSucces, loginError, logOut } = userSlice.actions;

export default userSlice.reducer;
