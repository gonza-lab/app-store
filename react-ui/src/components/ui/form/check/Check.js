import React from 'react';
import PropTypes from 'prop-types';

import './Check.scss';

export const UiFormCheck = ({ labelText, name, onChange, checked }) => {
  return (
    <div className="ui-form-check">
      <input
        type="checkbox"
        id={'id-' + name}
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <label htmlFor={'id-' + name}>{labelText}</label>
    </div>
  );
};

UiFormCheck.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};
