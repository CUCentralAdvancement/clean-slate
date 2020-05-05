import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

/**
 * Description of the action button component.
 */
export default function ActionButton({ children, handleClick, ...props }) {
  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
}

ActionButton.propTypes = {
  /**
   * The name of the button.
   */
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

ActionButton.defaultProps = {
  handleClick: (val) => console.log(val),
};
