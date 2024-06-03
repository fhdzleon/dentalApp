import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import appoimentSlice from "../features/appoimentSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    appoiment: appoimentSlice,
  },
});

export default store;
