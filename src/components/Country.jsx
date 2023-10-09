import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetCountries, selectCountry } from '../redux/countries/countriesSlice';
import style from '../style/countries.module.css';
import '../App.css';

const Country = ({
  name, flag, region, population, capital, alt,
}) => {
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const handlerClick = (name) => {
    dispatch(resetCountries());
    dispatch(selectCountry(name));
    navegate('/countryDetails');
  };

  const { theme } = useSelector((state) => state.countries);

  const themeMode = theme.dark ? 'darkModeElements' : 'lightModeElements';

  return (
    <div
      className={`${themeMode} ${style.countryContainer}`}
      role="button"
      onKeyDown={() => {
        handlerClick(name);
      }}
      tabIndex={0}
      onClick={() => {
        handlerClick(name);
      }}
    >
      <div className={style.countryFlag}>
        <img src={flag} alt={alt} />
      </div>
      <div className={style.countryDetails}>
        <h3>{name}</h3>
        <div>
          <h5>
            Polulation:
          </h5>
          <p>{population}</p>
        </div>
        <div>
          <h5>Region:</h5>
          <p>{region}</p>
        </div>
        <div>
          <h5>Capital:</h5>
          <p>{capital}</p>
        </div>
      </div>
    </div>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  capital: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Country;
