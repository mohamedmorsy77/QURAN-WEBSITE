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

export const fetchSurahsDetails = createAsyncThunk(
  "surahs/fetchSurahsDetails",
  async (surahId) => {
    try {
      const response = await axios.get(
        `https://api.alquran.cloud/v1/surah/${surahId}`
      );

      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
