import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Count"

let store =configureStore({
  reducer:{
    count:CounterSlice,
    
  }
})

export default store