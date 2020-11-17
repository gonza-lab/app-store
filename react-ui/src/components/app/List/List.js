import React from 'react';
import PropTypes from 'prop-types';

import './List.scss';

export const AppList = ({ children, title }) => {
  return (
    <div className="app-list">
      <div className="app-list__title">{title}</div>
      <div className="app-list__apps-card">{children}</div>
    </div>
  );
};

AppList.propTypes = {
  title: PropTypes.string,
};
