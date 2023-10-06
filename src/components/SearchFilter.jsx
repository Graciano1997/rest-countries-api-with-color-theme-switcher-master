import style from '../style/countries.module.css';

const SearchFilter = () => (
  <section className={style.searchContainer}>
    <div>
      <input type="text" name="country" id="country" placeholder="Search for a country..." />
    </div>
    <div>
      <select name="" id="">
        <option value="">Africa</option>
        <option value="">America</option>
        <option value="">Asia</option>
        <option value="">Europe</option>
        <option value="">Oceania</option>
      </select>
    </div>
  </section>
);

export default SearchFilter;
