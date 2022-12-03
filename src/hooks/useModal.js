import { MdSignalWifiStatusbarConnectedNoInternet } from 'react-icons/md';
import { useEffect, useState } from 'react';

export default function useModal(data) {
  const [modal, setModal] = useState({
    modal: <MdSignalWifiStatusbarConnectedNoInternet />,
  });

  useEffect(() => {
    switch (data) {
      case 'Personal Website':
        setModal({
          link: 'https://github.com/cxdetest/Personal-Website',
        });
        break;
      case 'Landing Page':
        setModal({
          link: 'https://github.com/cxdetest/landing-page',
        });
        break;
      case "Today's Weather":
        setModal({
          link: 'https://github.com/cxdetest/todays-weather',
        });
        break;
      case 'Calculator':
        setModal({
          link: 'https://github.com/cxdetest/calculator',
        });
        break;
      case 'Todo List':
        setModal({
          link: 'https://github.com/cxdetest/todo',
        });
        break;
      case 'React Custom Hooks':
        setModal({
          link: 'https://github.com/cxdetest/react-custom-hooks',
        });
        break;

      default:
        setModal({
          modal: <MdSignalWifiStatusbarConnectedNoInternet />,
        });
        break;
    }
  }, [data]);

  return modal;
}
