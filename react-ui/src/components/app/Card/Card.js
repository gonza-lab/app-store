import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';
import { Link } from 'react-router-dom';

export const AppCard = ({ img, name, developer, price, id }) => {
  return (
    <div className="app-card">
      <div className="app-card__img">
        <img src={img} alt="Applicacion" />
      </div>
      <div className="app-card__info">
        <p>
          <Link to={`/app/` + id}>{name}</Link>
        </p>
        <p>{developer}</p>
      </div>
      {price && <div className="app-card__price">{price}</div>}
    </div>
  );
};

AppCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
  price: PropTypes.string,
};
