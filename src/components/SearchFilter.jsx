import { useDispatch } from 'react-redux';
import {
  getCountriesRegion, resetAllCountries, getCountryItem, getCountries,
} from '../redux/countries/countriesSlice';
import style from '../style/countries.module.css';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const handlerChange = (region) => {
    if (region !== 'all') {
      dispatch(resetAllCountries());
      dispatch(getCountriesRegion(region));
    } else {
      dispatch(resetAllCountries());
      dispatch(getCountries());
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
          <option value="all">Filter By Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
export default SearchFilter;
