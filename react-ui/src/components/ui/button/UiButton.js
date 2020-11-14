import React from 'react';
import PropTypes from 'prop-types';

import './UiButton.scss';

export const UiButton = ({ children: Children, icon, theme, onClick }) => {
  const onFocus = (e) => {
    e.persist();
    setTimeout(() => {
      e.target.blur();
    }, 600);
  };

  return (
    <button
      onClick={onClick}
      onFocus={onFocus}
      className={`ui-button ${icon ? 'ui-button__icon' : ''} ${
        theme ? `ui-button__${theme}` : ``
      }`}
    >
      {Children}
    </button>
  );
};

UiButton.propTypes = {
  icon: PropTypes.bool,
  theme: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
