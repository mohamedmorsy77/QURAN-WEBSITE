import { createSlice } from "@reduxjs/toolkit";
import { fetchPrayerTime } from "../../networks/PrayerTimesApi";

export const prayerTimesSlice = createSlice({
  name: "prayer-times",
  initialState: {
    prayerTimesData: {},
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPrayerTime.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPrayerTime.fulfilled, (state, action) => {

        state.prayerTimesData = action.payload.data;
      }).addCase(fetchPrayerTime.rejected, (state, action) => {
        
        state.error = action.payload;
      });
  },
});

export  {fetchPrayerTime} ;
export default prayerTimesSlice.reducer;
