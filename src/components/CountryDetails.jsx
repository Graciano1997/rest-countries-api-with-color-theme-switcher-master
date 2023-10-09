import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { getCountry } from '../redux/countries/countriesSlice';
import BorderCountry from './BorderCountry';
import style from '../style/singlecountry.module.css';
import '../App.css';

const CountryDetails = () => {
  const dispatch = useDispatch();
  const { selectedCountry, country, theme } = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountry(selectedCountry));
  }, [dispatch]);
  const navegate = useNavigate();
  const themeMode = theme.dark ? 'darkModeElements' : 'lightModeElements';
  const themeModeDetails = theme.dark ? 'detailsDark' : 'detailsLight';

  return (
    <section className={style.countryItemContainer}>
      <div>
        <button
          type="button"
          className={`${style.buttonItem} ${themeMode}`}
          onClick={() => { navegate('/'); }}
        >
          <p>
            <FontAwesomeIcon icon={faArrowLeftLong} className={style.arrowLeft} />
            Back
          </p>
        </button>
      </div>
      <div className={`${style.countryItemDetails} ${themeModeDetails}`}>
        <div className={style.countryFlag}>
          <img src={country.flag} alt={country.alt} />
        </div>
        <div className={style.countryDetailsContainer}>
          <h1>{selectedCountry}</h1>
          <div className={style.countryDetails}>
            <div className={style.countryDetailsA}>
              <div>
                <h5>
                  Native Name:
                </h5>
                <p>{country.nativeName}</p>
              </div>
              <div>
                <h5>
                  Polulation:
                </h5>
                <p>{country.population}</p>
              </div>
              <div>
                <h5>Region:</h5>
                <p>{country.region}</p>
              </div>
              <div>
                <h5>Sub Region:</h5>
                <p>{country.subregion}</p>
              </div>
              <div>
                <h5>Capital:</h5>
                <p>{country.capital}</p>
              </div>
            </div>
            <div className={style.countryDetailsB}>
              <div>
                <h5>
                  Top Level Domain:
                </h5>
                <p>{country.tld}</p>
              </div>
              <div>
                <h5>
                  Currencies:
                </h5>
                <p>{country.currency}</p>
              </div>
              <div className={style.countryLanguage}>
                <h5>
                  Languages:
                </h5>
                <p>{(country.languages !== undefined) && (country.languages.toString())}</p>
              </div>
            </div>
          </div>
          <div className={style.countryBorders}>
            <div>
              <h5>Border Countries:</h5>
            </div>
            {(country.borders !== undefined) && (
              <div className={style.countryBorderElements}>
                {country.borders.map((border) => (
                  <BorderCountry
                    key={(Math.sin(Math.random()) * Math.random())}
                    code={border}
                  />
                ))}
              </div>
            )}
            {(country.borders === undefined) && (
              <div className={style.countryBorderElements}>
                <p className={style.noneBorderCountry}>None</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
