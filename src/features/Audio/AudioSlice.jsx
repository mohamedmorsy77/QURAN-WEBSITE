import { createSlice } from "@reduxjs/toolkit";
import { fetchAudio } from "../../networks/audioApi";

export const audioSlice = createSlice({
  name: "audio",
  initialState: {
    error: "",
    loading: false,
    audioData: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAudio.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAudio.fulfilled, (state, action) => {
        state.audioData = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchAudio.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});
export { fetchAudio };
export default audioSlice.reducer;
