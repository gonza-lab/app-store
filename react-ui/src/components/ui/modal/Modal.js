import React from 'react';
import Modal from 'react-modal';

export const UiModal = ({ children, ...rest }) => {
  return (
    <Modal
      overlayClassName={`animate__animated animate__${
        isOpenModalAdmin ? 'fadeIn' : 'fadeOut'
      }`}
      className={`animate__animated animate__${
        isOpenModalAdmin ? 'slideInDown' : 'slideOutDown'
      }`}
      closeTimeoutMS={1000}
      {...rest}
    >
      {children}
    </Modal>
  );
};
