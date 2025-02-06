import { createSlice } from "@reduxjs/toolkit";
import { fetchRadio } from "../../networks/RadioApi";

export const audioSlice = createSlice({
  name: "radio",
  initialState: {
    QuranRadioData: {},
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRadio.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRadio.fulfilled, (state, action) => {
        console.log(action.payload);
        state.QuranRadioData = action.payload;
      })
      .addCase(fetchRadio.rejected, (state, action) => {
  
        state.error = action.payload;
      });
  },
});
export { fetchRadio };
export default audioSlice.reducer;
