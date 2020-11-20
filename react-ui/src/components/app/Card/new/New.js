import React from 'react';
import PropTypes from 'prop-types';

export const AppCardNew = ({ onClick }) => {
  return (
    <div className="app-card app-card__new" onClick={onClick}>
      <div></div>
      <i className="fas fa-plus"></i>
    </div>
  );
};

AppCardNew.propTypes = {
  onClick: PropTypes.func,
};
