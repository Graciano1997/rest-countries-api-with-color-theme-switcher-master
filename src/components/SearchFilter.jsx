import style from '../style/countries.module.css';

const SearchFilter = () => (
  <section className={style.searchContainer}>
    <div>
      <span>gra</span>
      <input type="text" name="country" id="country" placeholder="Search for a country..." />
    </div>
    <div><p>a</p></div>
  </section>
);

export default SearchFilter;
