import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSpreadsheet } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import cv from '../../assets/sairi-cv.pdf';
import { Reducer } from '../../reducer/index';
import style from './Global.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export const Menu = () => {
  const theme = useContext(ThemeContext);
  const [state, dispatch] = Reducer();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dispatch({ type: 'close' });
    }
  });

  return (
    <div
      style={{
        background: theme.background,
        color: theme.color,
      }}
    >
      <span
        className={style.menuBtn}
        style={{ color: theme.color, boxShadow: theme.boxShadow }}
      >
        {state.bool ? (
          <AiOutlineClose onClick={() => dispatch({ type: 'close' })} />
        ) : (
          <GiHamburgerMenu onClick={() => dispatch({ type: 'open' })} />
        )}
      </span>

      <section
        className={style.menu}
        style={
          state.bool
            ? { visibility: 'visible' }
            : {
                visibility: 'hidden',
              }
        }
      >
        <a
          href='#home'
          onClick={() => dispatch({ type: 'close' })}
          style={{ color: theme.color }}
        >
          Home
        </a>
        <a
          href='#skills'
          onClick={() => dispatch({ type: 'close' })}
          style={{ color: theme.color }}
        >
          Skills
        </a>
        <a
          href='#portfolio'
          onClick={() => dispatch({ type: 'close' })}
          style={{ color: theme.color }}
        >
          Portfolio
        </a>
        <a
          href='#about'
          onClick={() => dispatch({ type: 'close' })}
          style={{ color: theme.color }}
        >
          About
        </a>
        <a
          href='#contact'
          onClick={() => dispatch({ type: 'close' })}
          style={{ color: theme.color }}
        >
          Contact
        </a>
        <a href={cv} download style={{ color: theme.color }}>
          <BiSpreadsheet />
        </a>
      </section>
    </div>
  );
};
