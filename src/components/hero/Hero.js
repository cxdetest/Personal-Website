import { MainContainer } from '../reusable/containers';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export const Hero = () => {
  const theme = useContext(ThemeContext);
  return (
    <MainContainer
      id='home'
      style={{ background: theme.background, color: theme.color }}
    >
      <p>
        Hello World <small> I'm</small>
      </p>

      <b style={{ margin: '15px' }}>=</b>
      <h1>(Sairi Conejo Flores)</h1>
      <b style={{ margin: '15px' }}>=&gt;</b>
      <p>Full Stack Developer</p>
    </MainContainer>
  );
};
