import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countries: [],
  isLoading: false,
  hasError: false,
  errorMessage: '',
};

const countryUrl = 'https://restcountries.com/v3.1/all';

export const getCountries = createAsyncThunk('countries/getCountries', async (countryUrl) => {
  const result = await axios.get(countryUrl);
  return result.data;
});


export const countriesSlice = createSlice(
  {
    initialState,
    name: countries,
    reducers: {
      resetCountries: (state) => {
        state.countries = [];
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(getCountries.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getCountries.rejected, (state, action) => {
          isLoading = false;
          state.hasError = true;
          state.errorSMS = action.payload.errorMessage;
        })
        .addCase(getCountries.fulfilled, (state, action) => {
          state.countries = action.payload;
        })
    }

  }
);

export default countriesSlice.reducer;
export const { resetCountries } = countriesSlice.actions;
