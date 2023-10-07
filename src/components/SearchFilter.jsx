import { useDispatch } from 'react-redux';
import { getCountriesRegion, resetAllCountries } from '../redux/countries/countriesSlice';
import style from '../style/countries.module.css';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const handlerChange = (region) => {
    dispatch(resetAllCountries());
    dispatch(getCountriesRegion(region));
  };
  return (
    <section className={style.searchContainer}>
      <div>
        <input type="text" name="country" id="country" placeholder="Search for a country..." />
      </div>
      <div>
        <select
          name="regions"
          placeholder="Filter by Region"
          onChange={(el) => {
            handlerChange(el.target.value);
          }}
        >
          <option>Filter By Region</option>
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
