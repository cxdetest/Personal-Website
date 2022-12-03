import { ThemeBtn } from './components/buttons/ThemeBtn';
import { Hero } from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Menu } from './components/buttons/Menu';
import { theme, ThemeContext } from './contexts/index';
import { Reducer } from './reducer';
import './App.css';
import 'animate.css';

function App() {
  const [state, dispatch] = Reducer();
  function getTheme(value) {
    dispatch({ type: value });
  }

  return (
    <ThemeContext.Provider value={theme[state.theme]}>
      <ThemeBtn user={state.theme} fn={getTheme} />
      <Hero />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <Footer />

      <Menu />
    </ThemeContext.Provider>
  );
}

export default App;
