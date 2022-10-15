import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
};

let counterSLice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.count += 1;
    },
    decrease: (state, action) => {
      state.count -= 1;
    },
    count1: (state, action) => {
      return state.count;
    }
    
  },
});

export default counterSLice.reducer;
export let { increase, decrease, count1 } = counterSLice.actions;


