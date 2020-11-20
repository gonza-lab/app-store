import React from 'react';
import PropTypes from 'prop-types';

import './Select.scss';

export const UiFormSelect = ({ options, name, labelText, onChange, value }) => {
  return (
    <div className="ui-form-select">
      <label htmlFor={'id-' + name}>{labelText}</label>
      <select id={'id-' + name} name={name} onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

UiFormSelect.propTypes = {
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
