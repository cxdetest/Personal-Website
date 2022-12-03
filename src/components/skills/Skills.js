import { FlexContainer, GridContainer } from '../reusable/containers';
import { Spheres } from '../reusable/spheres';
import { Modal } from '../reusable/Modal';
import UpdatedComponent from '../../hoc/index';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

let skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'Git',
  'NodeJS',
  'MySQL',
  'MongoDB',
  'ExpressJS',
];
const Skills = ({ obj }) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      id='skills'
      style={{ background: theme.background, color: theme.color }}
    >
      <FlexContainer>
        <GridContainer>
          {skills.map((el, index) => (
            <Spheres name={el} key={index} fn={obj.getComponent} />
          ))}
        </GridContainer>

        {obj.openModal && (
          <Modal obj={obj}>
            <h3>{obj.data}</h3>
            {obj.value.modal}
          </Modal>
        )}
      </FlexContainer>
    </div>
  );
};

export default UpdatedComponent(Skills);
