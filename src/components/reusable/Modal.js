import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ThemeContext } from '../../contexts';
import FooterLinks from './FooterLinks';
import { AiOutlineClose } from 'react-icons/ai';

const portal = document.getElementById('portal');
export const Modal = ({ children, obj }) => {
  const theme = useContext(ThemeContext);

  return ReactDOM.createPortal(
    <div
      style={{
        color: theme.color,
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(3px)',
        backgroundColor: 'rgba(9, 38, 58, 0.5)',
        height: '100vh',
      }}
      className='animate__animated animate__jackInTheBox'
    >
      {children}

      <button
        className='modalClose-btn'
        onClick={() => {
          obj.setOpenModal(false);
          obj.setData('');
        }}
        style={{ background: theme.color, color: theme.background }}
      >
        <AiOutlineClose />
      </button>
      <FooterLinks link={obj.value.link} />
    </div>,
    portal
  );
};
