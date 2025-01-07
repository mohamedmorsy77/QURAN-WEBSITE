import { createSlice } from "@reduxjs/toolkit";
import { fetchSurahsData } from "../../networks/AyahsApi";

export const surahSlice = createSlice({
  name: "ayahs",
  initialState: {
    surahsData: [],
    error: "",
    loading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSurahsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSurahsData.fulfilled, (state, action) => {
        state.surahsData = action.payload;
        state.loading = false;
      })
      .addCase(fetchSurahsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export { fetchSurahsData };
export default surahSlice.reducer;
