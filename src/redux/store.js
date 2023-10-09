import { configureStore } from '@reduxjs/toolkit';
import countriesRedux from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesRedux,
  },
});

export default store;
