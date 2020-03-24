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
  /**
   * The name of the button.
   */
  name: PropTypes.string,
  /**
   * If disabled, the button has less opacity and can't be clicked.
   */
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  name: 'a button',
  isDisabled: false,
};
