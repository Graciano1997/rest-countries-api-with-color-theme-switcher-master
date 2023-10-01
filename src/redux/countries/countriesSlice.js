import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  selectedCountry: 'Gra',
  isLoading: false,
  hasError: false,
  errorMessage: '',
};

const countryUrl = 'https://restcountries.com/v3.1/all';

export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  const result = await axios.get(countryUrl);
  return result.data;
});

export const countriesSlice = createSlice(
  {
    initialState,
    name: 'countries',
    reducers: {
      resetCountries: (state) => {
        state.countries = [];
      },
      selectCountry: (state, action) => {
        state.selectedCountry = action.payload;
        console.log(state.selectedCountry);
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getCountries.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getCountries.rejected, (state, action) => {
          state.isLoading = false;
          state.hasError = true;
          state.errorMessage = action.error.message;
        })
        .addCase(getCountries.fulfilled, (state, action) => {
          const allCountries = action.payload;
          allCountries.forEach((country) => {
            const capitalCountry = country.capital;
            const countryInfo = {
              name: country.name.common,
              population: country.population,
              capital: capitalCountry,
              region: country.region,
              flag: country.flags.svg,
              alt: country.flags.alt,
            };
            state.countries.push(countryInfo);
          });
          state.isLoading = false;
          state.hasError = false;
          state.errorMessage = '';
        });
    },

  },
);

export default countriesSlice.reducer;
export const { resetCountries, selectCountry } = countriesSlice.actions;
