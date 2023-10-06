import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  borders: [],
  selectedCountry: '',
  country: '',
  isLoading: false,
  hasError: false,
  errorMessage: '',
};

const countryUrl = 'https://restcountries.com/v3.1/all';

export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  try {
    const result = await axios.get(countryUrl);
    return result.data;
  } catch (error) {
    return error.message;
  }
});

export const getCountry = createAsyncThunk('countries/getCountry', async (name) => {
  const result = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  return result.data;
});

// export const getCountriesNames = async (codes) => {
//   const result = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${codes.join(',')}`);
//   return result.data;
// };

export const countriesSlice = createSlice(
  {
    initialState,
    name: 'countries',
    reducers: {
      resetCountries: (state) => {
        state.borders = [];
      },
      selectCountry: (state, action) => {
        state.selectedCountry = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getCountries.pending, (state) => {
          state.isLoading = true;
          state.hasError = false;
          state.errorMessage = '';
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
        })
        .addCase(getCountry.rejected, (state, action) => {
          state.isLoading = false;
          state.hasError = true;
          state.errorMessage = action.error.message;
        })
        .addCase(getCountry.pending, (state) => {
          state.isLoading = true;
          state.hasError = false;
          state.errorMessage = '';
        })
        .addCase(getCountry.fulfilled, (state, action) => {
          const country = action.payload[0];
          const countryLanguages = [];
          const currencies = [];

          Object.keys(country.languages).forEach((lang) => {
            countryLanguages.push(country.languages[lang]);
          });
          const nativeNames = [];
          Object.keys(country.name.nativeName).forEach((native) => {
            nativeNames.push(country.name.nativeName[native].common);
          });

          Object.keys(country.currencies).forEach((name) => {
            currencies.push(country.currencies[name].name);
          });
          const countryInfo = {
            name: country.name.common,
            population: country.population,
            capital: country.capital,
            region: country.region,
            flag: country.flags.svg,
            languages: countryLanguages,
            alt: country.flags.alt,
            tld: country.tld,
            subregion: country.subregion,
            borders: country.borders,
            nativeName: nativeNames[0],
            currency: currencies[0],
          };
          console.log(nativeNames);
          state.country = countryInfo;
          state.isLoading = false;
          state.hasError = false;
          state.errorMessage = '';
        });
    },
  },
);

export default countriesSlice.reducer;
export const { resetCountries, selectCountry } = countriesSlice.actions;
