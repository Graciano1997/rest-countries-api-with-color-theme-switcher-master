import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { setTheme } from '../redux/countries/countriesSlice';
import style from '../style/header.module.css';
import '../App.css';

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.countries);
  const handlerTheme = () => {
    dispatch(setTheme());
  };

  const themeMode = theme.dark ? 'darkModeElements' : 'lightModeElements';

  return (
    <>
      <header className={themeMode}>
        <div className={style.headerContainer}>
          <div><h3>Where in the World?</h3></div>
          <div>
            {(theme.dark)
              && (
                <p>
                  <FontAwesomeIcon
                    icon={faMoon}
                    className={style.themeItem}
                    onClick={handlerTheme}
                  />
                  Dark mode
                </p>
              )}
            {(theme.light)
              && (
                <p>
                  <FontAwesomeIcon
                    icon={faSun}
                    onClick={handlerTheme}
                    className={style.themeItem}
                  />
                  Light mode
                </p>
              )}
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
