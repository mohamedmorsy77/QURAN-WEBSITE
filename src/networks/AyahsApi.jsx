import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSurahsData = createAsyncThunk(
  "ayahs/fetchSurahsData",
  async () => {
    try {
      let response = await axios.get("https://api.alquran.cloud/v1/surah");

      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
