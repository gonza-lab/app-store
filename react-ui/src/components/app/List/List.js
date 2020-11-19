import React from 'react';
import PropTypes from 'prop-types';

import './List.scss';
import { UiHeader } from '../../ui/header/Header';

export const AppList = ({ children, title }) => {
  return (
    <div className="app-list">
      <UiHeader title={title} />
      <div className="app-list__apps-card">{children}</div>
    </div>
  );
};

AppList.propTypes = {
  title: PropTypes.string,
};
