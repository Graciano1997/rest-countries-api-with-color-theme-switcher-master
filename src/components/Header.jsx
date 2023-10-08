import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import style from '../style/header.module.css';

const Header = () => {
  const [theme, setTheme] = useState({ dark: true, light: false });
  const handlerTheme = () => {
    setTheme({
      ...theme,
      dark: !theme.dark,
      light: !theme.light,
    });
  };
  return (
    <>
      <header className={style.headerContainer}>
        <div><h2>Where in the World?</h2></div>
        <div>
          {(theme.dark)
            && (
              <p>
                <FontAwesomeIcon icon={faMoon} className={style.themeItem} onClick={handlerTheme} />
                Dark mode
              </p>
            )}
          {(theme.light)
            && (
              <p>
                <FontAwesomeIcon icon={faSun} onClick={handlerTheme} className={style.themeItem} />
                Light mode
              </p>
            )}
        </div>
      </header>
    </>
  );
};
export default Header;
