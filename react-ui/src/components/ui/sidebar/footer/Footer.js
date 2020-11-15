import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { UiButton } from '../../button/UiButton';
import { openModalLogin, openModalSigin } from '../../../../actions/ui';

export const UiSidebarFooter = () => {
  const { isLogged, name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOpenModalLogin = () => {
    dispatch(openModalLogin());
  };

  const handleOpenModalSigin = () => {
    dispatch(openModalSigin());
  };

  return (
    <div
      className={`ui-sidebar-footer ${name ? 'ui-sidebar-footer__logged' : ''}`}
    >
      {isLogged ? (
        <>
          Logged in as:
          <p>{name}</p>
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
