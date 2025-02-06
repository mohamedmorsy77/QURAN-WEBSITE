import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPrayerTime = createAsyncThunk(
  "prayer-times/fetchPrayerTimes",
  async (_, { rejectWithValue }) => {
    try {
      let response = await axios.get(
        "https://api.aladhan.com/v1/timingsByCity/03-02-2025?city=cairo&country=egypt&method=8"
      );
      return response.data;
    } catch (error) {
       
      return rejectWithValue(
        error.response?.data || "Failed to fetch prayer times. Please try again."
      );
    }
  }
);
