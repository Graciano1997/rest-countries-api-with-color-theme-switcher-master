import { useDispatch } from 'react-redux';
import {
  getCountriesRegion, resetAllCountries, getCountryItem, getCountries,
} from '../redux/countries/countriesSlice';
import style from '../style/countries.module.css';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const handlerChange = (region) => {
    if (region === 'all') {
      dispatch(resetAllCountries());
      dispatch(getCountries());
    } else if (region !== '') {
      dispatch(resetAllCountries());
      dispatch(getCountriesRegion(region));
    }
  };

  const handlerKeyDown = (name) => {
    if (name !== '') {
      dispatch(resetAllCountries());
      dispatch(getCountryItem(name));
    }
  };
  return (
    <section className={style.searchContainer}>
      <div>
        <input type="text" name="country" id="country" placeholder="Search for a country..." onKeyDown={(el) => { handlerKeyDown(el.target.value); }} />
      </div>
      <div>
        <select
          name="regions"
          placeholder="Filter by Region"
          onChange={(el) => {
            handlerChange(el.target.value);
          }}
        >
          <option value="">Filter By Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
          <option value="all">world</option>
        </select>
      </div>
    </section>
  );
};
export default SearchFilter;
