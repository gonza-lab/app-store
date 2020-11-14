import React from 'react';
import PropTypes from 'prop-types';

import './Heading.scss';

export const UiSidebarHeading = ({ heading }) => {
  return <div className="ui-sidebar-heading">{heading}</div>;
};

UiSidebarHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};
