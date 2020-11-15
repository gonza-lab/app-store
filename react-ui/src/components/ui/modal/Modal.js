import React from 'react';
import Modal from 'react-modal';
import './Modal.scss';

Modal.setAppElement('#root');

export const UiModal = ({ children, ...rest }) => {
  return (
    <Modal
      isOpen={rest.isOpen}
      overlayClassName={`animate__animated animate__${
        rest.isOpen ? 'fadeIn' : 'fadeOut'
      }`}
      className={`animate__animated animate__${
        rest.isOpen ? 'slideInDown' : 'slideOutDown'
      }`}
      closeTimeoutMS={750}
      {...rest}
    >
      {children}
    </Modal>
  );
};
