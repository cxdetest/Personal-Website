import { useContext } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { ThemeContext } from '../../contexts';
import style from './Global.module.css';

export const ThemeBtn = ({ user, fn }) => {
  const theme = useContext(ThemeContext);
  return (
    <span
      className={style.themeBtn}
      style={{
        color: theme.color,
        boxShadow: theme.boxShadow,
      }}
    >
      {user === 'light' ? (
        <BsSun onClick={() => fn('dark')} />
      ) : (
        <BsMoon onClick={() => fn('light')} />
      )}
    </span>
  );
};
