import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

export const UiSidebarFooter = ({ name }) => {
  return (
    <div
      className={`ui-sidebar-footer ${name ? 'ui-sidebar-footer__show' : ''}`}
    >
      Logged in as:
      <p>{name}</p>
    </div>
  );
};

UiSidebarFooter.propTypes = {
  name: PropTypes.string,
};
