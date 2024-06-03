import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appoiments: [],
};

const appoimentSlice = createSlice({
  name: "appoiment",
  initialState,
  reducers: {
    getAppoiments: (state, action) => {
      state.appoiments = action.payload;
    },
    cancelAppoiment: (state, action) => {
      const { id, status } = action.payload;
      const appoiment = state.appoiments.find(
        (appoiment) => appoiment.id === id
      );

      if (appoiment) {
        appoiment.status = status;
      }
    },
  },
});

export const { getAppoiments, cancelAppoiment } = appoimentSlice.actions;

export default appoimentSlice.reducer;
