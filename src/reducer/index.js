import { useReducer } from 'react';

const initialState = {
  bool: false,
  theme: 'light',
};

function reducingFunction(state, action) {
  switch (action.type) {
    case 'open':
      return { bool: true };
    case 'close':
      return { bool: false };
    case 'dark':
      return { theme: 'dark' };
    case 'light':
      return { theme: 'light' };

    default:
      return state;
  }
}

export function Reducer() {
  const [state, dispatch] = useReducer(reducingFunction, initialState);
  return [state, dispatch];
}
