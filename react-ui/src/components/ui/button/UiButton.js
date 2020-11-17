import React from 'react';
import PropTypes from 'prop-types';

import './UiButton.scss';

export const UiButton = ({
  className,
  children: Children,
  icon,
  theme,
  onClick,
  type,
  disabled,
}) => {
  const onFocus = (e) => {
    e.persist();
    setTimeout(() => {
      e.target.blur();
    }, 1000);
  };

  return (
    <button
      onClick={onClick}
      onFocus={onFocus}
      type={type ? type : 'button'}
      className={
        `ui-button ${icon ? 'ui-button__icon' : ''} ${
          theme ? `ui-button__${theme}` : ``
        } ` + className
      }
      disabled={disabled}
    >
      {Children}
    </button>
  );
};

UiButton.propTypes = {
  icon: PropTypes.bool,
  theme: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};
