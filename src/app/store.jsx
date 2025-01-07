import { configureStore } from "@reduxjs/toolkit";
import  surahSlice  from "../features/ayahs-reducer/AyahSlice";

export const store = configureStore({
  reducer: {
    surahs: surahSlice
  },
});
