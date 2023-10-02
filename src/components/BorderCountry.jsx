import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { resetCountries, selectCountry } from '../redux/countries/countriesSlice';
import style from '../style/singlecountry.module.css';

const BorderCountry = ({ code }) => {
  const [name, setName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [errorSMS, setErrorSMS] = useState('');
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const handlerClick = (name) => {
    dispatch(resetCountries());
    dispatch(selectCountry(name));
    navegate('/countryDetails');
  };

  const getCountryName = async () => {
    try {
      const result = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
      setCountryName(result.data[0].name.common);
    } catch (error) {
      setErrorSMS(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCountryName(code);
  }, []);

  if (errorSMS !== '') {
    return (
      <span>...</span>
    );
  }

  return (
    <button
      type="button"
      className={style.buttonItem}
      onClick={(el) => {
        setName(el.target.textContent);
        console.log(el.target.textContent);
        handlerClick(name);
      }}
    >
      {countryName}
    </button>
  );
};

BorderCountry.propTypes = { code: PropTypes.string.isRequired };

export default BorderCountry;
