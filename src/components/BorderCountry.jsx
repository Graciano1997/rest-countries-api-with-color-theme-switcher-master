import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { resetCountries, selectCountry, getCountry } from '../redux/countries/countriesSlice';
import style from '../style/singlecountry.module.css';
import '../App.css';

const BorderCountry = ({ code }) => {
  const [countryName, setCountryName] = useState('');
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const handlerClick = (name) => {
    dispatch(resetCountries());
    dispatch(selectCountry(name));
    dispatch(getCountry(name));
    navegate('/countryDetails');
  };
  const { theme } = useSelector((state) => state.countries);

  const themeMode = theme.dark ? 'darkModeElements' : 'lightModeElements';

  const getCountryName = async () => {
    const result = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    setCountryName(result.data[0].name.common);
  };

  useEffect(() => {
    getCountryName(code);
  }, []);

  if (countryName === '') {
    return (
      <span>...</span>
    );
  }

  return (
    <button
      type="button"
      className={`${themeMode} ${style.buttonItem}`}
      onClick={(el) => {
        handlerClick(el.target.textContent);
      }}
    >
      {countryName}
    </button>
  );
};

BorderCountry.propTypes = { code: PropTypes.string.isRequired };

export default BorderCountry;
