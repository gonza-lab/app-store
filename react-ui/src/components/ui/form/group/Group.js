import React from 'react';
import PropTypes from 'prop-types';

import './Group.scss';

export const UiFormGroup = ({ children }) => {
  return <div className="ui-form-group">{children}</div>;
};

UiFormGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
