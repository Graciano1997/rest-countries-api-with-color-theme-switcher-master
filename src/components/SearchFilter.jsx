import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
      <div className={style.inputContainer}>
        <button type="button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
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
          <option value="africa"><p>Africa</p></option>
          <option value="america"><p>America</p></option>
          <option value="asia"><p>Asia</p></option>
          <option value="europe"><p>Europe</p></option>
          <option value="oceania"><p>Oceania</p></option>
          <option value="all"><p>World</p></option>
        </select>
      </div>
    </section>
  );
};
export default SearchFilter;
