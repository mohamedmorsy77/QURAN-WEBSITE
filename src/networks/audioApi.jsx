import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.quran.com/api/v4";
export const fetchAudio = createAsyncThunk(
  "audio/fetchAudio",
  async ({id, chapter}, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/chapter_recitations/${id}/${chapter}`
      );
      return response.data; // Return the response data
    } catch (error) {
      // Handle errors and pass a custom message or error object
      return rejectWithValue(
        error.response?.data || "Failed to fetch audio. Please try again."
      );
    }
  }
);
