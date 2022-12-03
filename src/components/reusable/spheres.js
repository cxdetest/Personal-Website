import { FaHtml5, FaCss3, FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiJavascript,
  SiGit,
  SiMysql,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';
import { MdDashboardCustomize } from 'react-icons/md';
import { GoBrowser } from 'react-icons/go';
import { CiCalculator2 } from 'react-icons/ci';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { RiTodoFill, RiPagesLine } from 'react-icons/ri';
import { GiClover, GiLifeInTheBalance } from 'react-icons/gi';
import { BiWorld } from 'react-icons/bi';
import './sphere.css';

export const Spheres = ({ name, fn }) => {
  let result;

  switch (name) {
    case 'HTML':
      result = <FaHtml5 />;
      break;
    case 'CSS':
      result = <FaCss3 />;
      break;
    case 'JavaScript':
      result = <SiJavascript />;
      break;
    case 'ReactJS':
      result = <FaReact />;
      break;
    case 'Git':
      result = <SiGit />;
      break;
    case 'NodeJS':
      result = <FaNodeJs />;
      break;
    case 'MySQL':
      result = <SiMysql />;
      break;
    case 'MongoDB':
      result = <SiMongodb />;
      break;
    case 'ExpressJS':
      result = <SiExpress />;
      break;
    case 'Personal Website':
      result = <GoBrowser />;
      break;
    case 'Calculator':
      result = <CiCalculator2 />;
      break;
    case 'Todo List':
      result = <RiTodoFill />;
      break;
    case "Today's Weather":
      result = <TiWeatherPartlySunny />;
      break;
    case 'Landing Page':
      result = <RiPagesLine />;
      break;
    case 'React Custom Hooks':
      result = <MdDashboardCustomize />;
      break;
    case 'Get up, Learn and Move on':
      result = <GiClover />;
      break;
    case 'Life in the Balance':
      result = <GiLifeInTheBalance />;
      break;
    case 'Discover the World':
      result = <BiWorld />;
      break;

    default:
      break;
  }

  return (
    <span className={`${name} sphere`} onClick={fn}>
      {result}
      <span className={name}></span>
    </span>
  );
};
