import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Navlink.scss';
import { NavLink } from 'react-router-dom';

export const UiSidebarNavlink = ({ options, children, dropdown }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`ui-sidebar-navlink ${
        isCollapsed ? 'ui-sidebar-navlink__collapsed' : ''
      }`}
    >
      <div
        className="ui-sidebar-navlink__btn"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <i className={options.i}></i>
        {!dropdown ? (
          <NavLink
            exact
            to={options.to}
            activeClassName="ui-sidebar-navlink__active"
          >
            {options.text}
          </NavLink>
        ) : (
          <p>{options.text}</p>
        )}
        {dropdown && (
          <i className="fas fa-chevron-right ui-sidebar-navlink__arrow "></i>
        )}
      </div>
      <div
        className="ui-sidebar-navlink__dropdown-content"
        style={{
          height: `${
            isCollapsed && children ? `${children.length * 37}px` : `0px`
          }`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

UiSidebarNavlink.propTypes = {
  options: PropTypes.shape({
    text: PropTypes.string.isRequired,
    i: PropTypes.string.isRequired,
    to: PropTypes.string,
  }).isRequired,
  dropdown: PropTypes.bool,
};
