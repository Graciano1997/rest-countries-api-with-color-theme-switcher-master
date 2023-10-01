import { useSelector } from 'react-redux';
import style from '../style/countries.module.css';

const CountryDetails = () => {
  const { selectedCountry } = useSelector((state) => state.countries);
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
