import React from 'react';

import './Modal.scss';

import { ReactComponent as CloseIcon } from 'assets/img/icons/close-icon.svg';

type ModalProps = {
  onClose: () => void;
  children: string | JSX.Element;
}

const Modal = ({
  onClose,
  children,
}: ModalProps): JSX.Element => {
  return (
    <div className='modal'>
      <button
        onClick={onClose}
        className='modal__bg btn-clear'
      />
      <div className='modal__content'>
        <button
          onClick={onClose}
          className='modal__content-close btn-clear'
        >
          <CloseIcon className='modal__content-close-icon' />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
