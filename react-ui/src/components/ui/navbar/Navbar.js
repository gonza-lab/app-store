import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { UiButton } from '../button/UiButton';

import { toggleSidebar } from '../../../actions/ui';

import './Navbar.scss';

export const UiNavbar = ({ brand }) => {
  const dispatch = useDispatch();

  const openSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <nav className="ui-navbar">
      <Link to={brand.to}>{brand.name}</Link>
      <UiButton icon theme="transparent" onClick={openSidebar}>
        <i className="fas fa-bars"></i>
      </UiButton>
    </nav>
  );
};

UiNavbar.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }).isRequired,
};
