import React from 'react';
import PropTypes from 'prop-types';

export function Button({ children, name, isDisabled }) {
  return (
    <button name={name} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  name: 'a button',
  isDisabled: false,
};
