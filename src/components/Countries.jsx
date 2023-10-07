import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../redux/countries/countriesSlice';
import Country from './Country';
import style from '../style/countries.module.css';
import SearchFilter from './SearchFilter';

const Countries = () => {
  const dispatch = useDispatch();
  const {
    countries, isLoading, hasError, errorMessage,
  } = useSelector((state) => state.countries);
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries());
    }
  }, [dispatch]);
  if (isLoading) {
    return (
      <h1>Loading</h1>
    );
  }

  if (hasError) {
    return (
      <>
        <h1>Upss!</h1>
        <h1>{errorMessage}</h1>
      </>
    );
  }
  return (
    <section>
      <SearchFilter />
      <section className={style.countriesContainer}>
        {countries.map((country) => (
          <Country
            key={Math.random()}
            name={country.name}
            population={country.population}
            region={country.region}
            flag={country.flag}
            alt={country.alt}
            capital={(country.capital)}
          />
        ))}
      </section>
    </section>
  );
};

export default Countries;
