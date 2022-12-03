import { createContext } from 'react';

export var theme = {
  light: {
    color: '#cbc6d8',
    background: '#2f394a',
    boxShadow: '0 0 5px #cbc6d8',
  },
  dark: {
    color: '#0080ff',
    background: '#283339',
    boxShadow: '0 0 5px #0080ff',
  },
};
export const ThemeContext = createContext();
