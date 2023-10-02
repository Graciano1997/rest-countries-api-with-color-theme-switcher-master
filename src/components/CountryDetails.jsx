import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountry } from '../redux/countries/countriesSlice';
import BorderCountry from './BorderCountry';
import style from '../style/singlecountry.module.css';

const CountryDetails = () => {
  const dispatch = useDispatch();
  const { selectedCountry, country } = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountry(selectedCountry));
    // if (country.borders.length > 0) {
    //   dispatch(getCountriesNames(country.borders));
    // }
  }, [dispatch]);
  // const countryBorde = new Set(borders);
  // console.log(country.borders);
  return (
    <section className={style.countryItemContainer}>
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
              <p>{country.population}</p>
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
              <p>{country.tld}</p>
            </div>
            <div>
              <h5>
                Languages:
              </h5>
              <p>{country.tld}</p>
            </div>
          </div>
        </div>
        <div className={style.countryBorders}>
          <div className={style.countryBordersDescription}>
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
    </section>
  );
};

export default CountryDetails;
