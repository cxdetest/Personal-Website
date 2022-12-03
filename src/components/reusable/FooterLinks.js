import React, { useContext } from 'react';
import { BsGithub } from 'react-icons/bs';
import 'animate.css';
import { ThemeContext } from '../../contexts';

const FooterLinks = ({ link }) => {
  const theme = useContext(ThemeContext);

  return (
    <a
      href={link}
      style={{
        color: theme.color,
        position: 'absolute',
        bottom: '25%',
        right: '11.5%',
        fontSize: '25px',
        zIndex: 999,
      }}
      target='_blank'
      rel='noopener noreferrer'
    >
      <BsGithub />
    </a>
  );
};

export default FooterLinks;
