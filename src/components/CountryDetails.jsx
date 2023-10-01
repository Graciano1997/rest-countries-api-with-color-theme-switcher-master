import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import style from '../style/countries.module.css';
import { getCountry } from '../redux/countries/countriesSlice';

const CountryDetails = () => {
  const dispatch = useDispatch();
  const { selectedCountry } = useSelector((state) => state.countries);
  useEffect(() => {
    if (selectedCountry !== '') {
      dispatch(getCountry(selectedCountry));
    }
  }, []);
  return (
    <div className={style.countryContainer}>
      <h1>{selectedCountry}</h1>
    </div>
  );
};

// Country.propTypes = {
//   name: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   region: PropTypes.string.isRequired,
//   flag: PropTypes.string.isRequired,
//   population: PropTypes.number.isRequired,
//   capital: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
export default CountryDetails;
