import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UiButton } from '../../button/UiButton';
import { openModalLogin, openModalSigin } from '../../../../actions/ui';

import './Footer.scss';
import { logout } from '../../../../actions/auth';

export const UiSidebarFooter = () => {
  const { isLogged, name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOpenModalLogin = () => {
    dispatch(openModalLogin());
  };

  const handleOpenModalSigin = () => {
    dispatch(openModalSigin());
  };

  const handleLogOut = () => {
    localStorage.removeItem('x-token');
    dispatch(logout());
  };

  return (
    <div
      className={`ui-sidebar-footer ${name ? 'ui-sidebar-footer__logged' : ''}`}
    >
      {isLogged ? (
        <>
          <div>
            Logged in as:
            <p>{name}</p>
          </div>
          <UiButton
            onClick={handleLogOut}
            icon
            theme="transparent"
            className="ui-sidebar-footer__btn-logout"
          >
            <i class="fas fa-sign-out-alt"></i>
          </UiButton>
        </>
      ) : (
        <>
          <UiButton
            onClick={handleOpenModalLogin}
            theme="blue"
            className="ui-sidebar-footer__login"
          >
            LOG IN
          </UiButton>
          <UiButton
            onClick={handleOpenModalSigin}
            theme="green"
            className="ui-sidebar-footer__login"
          >
            SIGN IN
          </UiButton>
        </>
      )}
    </div>
  );
};
