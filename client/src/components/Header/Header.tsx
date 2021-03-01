import { useState } from 'react';

import Logo from 'components/Logo';
import Button from 'components/Forms/Button';
import Modal from 'components/Modal';
import AddAnimalForm from 'components/Forms/AddAnimalForm';

import './Header.scss';

const Header = (): JSX.Element => {
  // Need change to false value
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);

  const openModal = () => setIsActiveModal(true);
  const closeModal = () => setIsActiveModal(false);
  
  return (
    <>
      {isActiveModal && (
        <Modal onClose={closeModal}>
          <AddAnimalForm />
        </Modal>
      )}
      <header className='header'>
        <div className='container'>
          <div className='header__wrap'>
            <Logo />
            <Button
              onClick={openModal}
              className='header__btn'
            >
              Добавить питомца
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
