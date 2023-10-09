import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from './redux/countries/countriesSlice';
import CountryDetails from './components/CountryDetails';
import Countries from './components/Countries';
import Country from './components/Country';
import Header from './components/Header';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTheme());
  }, [dispatch]);
  const { theme } = useSelector((state) => state.countries);
  const themeMode = theme.dark ? 'darkMode' : 'lightMode';
  return (
    <section className={`App ${themeMode}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country" element={<Country />} />
        <Route path="/countryDetails" element={<CountryDetails />} />
      </Routes>
    </section>
  );
}

export default App;
