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
  theme: '',
};

const countryUrl = 'https://restcountries.com/v3.1/all';

export const getCountriesRegion = createAsyncThunk('countries/getCountriesRegion', async (region) => {
  try {
    const result = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
});

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

export const getCountryItem = createAsyncThunk('countries/getCountryItem', async (name) => {
  const result = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  return result.data;
});

export const countriesSlice = createSlice(
  {
    initialState,
    name: 'countries',
    reducers: {
      resetCountries: (state) => {
        state.borders = [];
      },
      getTheme: (state) => {
        if (JSON.parse(localStorage.getItem('restCountryAppTheme'))) {
          const theme = JSON.parse(localStorage.getItem('restCountryAppTheme'));
          state.theme = theme;
        } else {
          state.theme = {
            dark: true,
            light: false,
          };
        }
      },
      setTheme: (state) => {
        state.theme = { dark: !state.theme.dark, light: !state.theme.light };
        localStorage.setItem('restCountryAppTheme', JSON.stringify(state.theme));
      },
      resetAllCountries: (state) => {
        state.countries = [];
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
        .addCase(getCountriesRegion.pending, (state) => {
          state.isLoading = true;
          state.hasError = false;
          state.errorMessage = '';
        })
        .addCase(getCountriesRegion.rejected, (state, action) => {
          state.isLoading = false;
          state.hasError = true;
          state.errorMessage = action.error.message;
        })
        .addCase(getCountryItem.pending, (state) => {
          state.hasError = false;
          state.errorMessage = '';
        })
        .addCase(getCountryItem.rejected, (state, action) => {
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
        .addCase(getCountryItem.fulfilled, (state, action) => {
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
        .addCase(getCountriesRegion.fulfilled, (state, action) => {
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
export const {
  resetCountries, selectCountry, resetAllCountries, getTheme, setTheme,
} = countriesSlice.actions;
