import React from 'react';
import './Container.scss';

export const UiContainer = ({ children, column, center }) => {
  return (
    <div
      className={`ui-container ${column ? 'ui-container__column' : ''} ${
        center ? 'ui-container__center' : ''
      }`}
    >
      {children}
    </div>
  );
};
