import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

export const AppCard = ({ img, name, developer, price, onClick, i }) => {
  return (
    <div className="app-card">
      <div className="app-card__img">
        <img src={img} alt="Applicacion" />
        <div onClick={onClick}>
          <i className={i}></i>
        </div>
      </div>
      <div className="app-card__info">
        <p onClick={onClick}>{name}</p>
        <p>{developer}</p>
      </div>
      {Boolean(+price) && <div className="app-card__price">$US {price}</div>}
    </div>
  );
};

AppCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
  price: PropTypes.number,
  onClick: PropTypes.func,
};
