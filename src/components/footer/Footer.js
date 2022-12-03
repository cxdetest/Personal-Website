import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <p
      style={{
        background: theme.background,
        color: theme.color,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
      }}
    >
      &copy; {new Date().getFullYear()} scf | All rights reserved
    </p>
  );
};
