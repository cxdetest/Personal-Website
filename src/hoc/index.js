import { useState } from 'react';
import useModal from '../hooks/useModal';

function UpdatedComponent(Component) {
  function NewComponent() {
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState('');

    function getComponent(e) {
      setOpenModal(true);

      let selectedButton = '';

      for (let i = 0; i < e.target.classList.length; i++) {
        selectedButton += ' ' + e.target.classList[i];
      }

      setData(selectedButton.trim());
    }
    const value = useModal(data);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setOpenModal(false);
      }
    });

    const obj = { openModal, setOpenModal, data, setData, getComponent, value };

    return <Component obj={obj} />;
  }

  return NewComponent;
}

export default UpdatedComponent;
