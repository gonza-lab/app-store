import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

export const UiHeader = ({title, subtitle, i}) => {
  return (
    <header className="ui-header">
      <div>
        <h1>
          <i className={i} />
          {title}
        </h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
};

UiHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  i: PropTypes.string,
};
