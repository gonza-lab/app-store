import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';
import { useSelector } from 'react-redux';
import { UiButton } from '../../button/UiButton';

export const UiSidebarFooter = () => {
  const { isLogged, name } = useSelector((state) => state.auth);

  return (
    <div
      className={`ui-sidebar-footer ${
        name ? 'ui-sidebar-footer__logged' : ''
      }`}
    >
      {isLogged ? (
        <>
          Logged in as:
          <p>{name}</p>
        </>
      ) : (
        <UiButton theme="blue" className="ui-sidebar-footer__login">
          LOGIN
        </UiButton>
      )}
    </div>
  );
};
