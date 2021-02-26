import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from 'constants/routes';

import Modal from 'components/Modal';

import './MainView.scss';

const MainView = (): JSX.Element => {

  return (
    <div>
      <Modal onClose={() => console.log('close')}>
        <h1 className='main-view__modal-title'>
          На этом сайте вы можете найти себе питомца!
        </h1>
      </Modal>
      main view
      <Link to={routes.contacts}>to contacts</Link>
    </div>
  );
}

export default MainView;
