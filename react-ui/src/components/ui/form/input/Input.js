import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

export const UiFormInput = ({
  labelText,
  onChange,
  value,
  msgError = '',
  name,
  placeholder,
  required,
  type,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.setCustomValidity(msgError);
  }, [msgError]);

  return (
    <div className="ui-form-input">
      <label htmlFor={'id-' + name}>{labelText}</label>
      <input
        ref={inputRef}
        value={value}
        onChange={onChange}
        name={name}
        id={'id-' + name}
        placeholder={placeholder}
        type={type ? type : 'text'}
        required={required}
      />
    </div>
  );
};

UiFormInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  msgError: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};
