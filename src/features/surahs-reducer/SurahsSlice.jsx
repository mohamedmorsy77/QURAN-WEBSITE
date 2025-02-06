import { createSlice } from "@reduxjs/toolkit";
import { fetchSurahsData, fetchSurahsDetails } from "../../networks/surahsApi";

export const surahSlice = createSlice({
  name: "surahs",
  initialState: {
    surahsData: [],
    surahDetails: {},
    error: "",
    loading: false,
    searchQuery: "",
  },
  reducers: {
    search: (state, action) => {
      state.searchQuery = action.payload;
    },
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
      })
      .addCase(fetchSurahsDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSurahsDetails.fulfilled, (state, action) => {
        state.surahDetails = action.payload;
        state.loading = false;
      })
      .addCase(fetchSurahsDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { search } = surahSlice.actions;
export { fetchSurahsData, fetchSurahsDetails };
export default surahSlice.reducer;
