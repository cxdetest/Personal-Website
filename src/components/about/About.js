import { useContext } from 'react';
import { ThemeContext } from '../../contexts';
import UpdatedComponent from '../../hoc';
import { FlexContainer, MediumContainer } from '../reusable/containers';
import { Modal } from '../reusable/Modal';
import { Spheres } from '../reusable/spheres';

let hobbies = [
  'Get up, Learn and Move on',
  'Life in the Balance',
  'Discover the World',
  'Get up, Learn and Move on',
];

const About = ({ obj }) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      id='about'
      style={{ background: theme.background, color: theme.color }}
    >
      <FlexContainer id='about'>
        <h3>About Me</h3>
        <br />
        <p style={{ textAlign: 'justify' }}>
          Hi, I am Sairi Conejo Flores. Full Stack Developer. I specialize in
          JavaScript con experience building applications in ReactJS. Innovator
          and active participant in the global technology community. Skills
          appropriate to the world of work with increasingly current knowledge
          and continuous learning.
        </p>

        {/*         {hobbies.map((el, index) => (
          <Spheres name={el} key={index} fn={obj.getComponent} />
        ))}

        {obj.openModal && (
          <Modal obj={obj}>
            <h3>{obj.data}</h3>
            {obj.value.modal}
          </Modal>
        )} */}
      </FlexContainer>
    </div>
  );
};

export default UpdatedComponent(About);
