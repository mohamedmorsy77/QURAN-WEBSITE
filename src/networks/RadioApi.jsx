import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRadio = createAsyncThunk(
  "fetch/radioData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://data-rosy.vercel.app/radio.json/");
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  }
);
