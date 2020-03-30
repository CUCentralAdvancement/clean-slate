import React from 'react';
import PropTypes from 'prop-types';

import BaseButton from './BaseButton';

/**
 * Description of the action button component.
 */
export default function ActionButton({ children, handleClick, ...props }) {
  return (
    <BaseButton {...props} onClick={handleClick}>
      {children}
    </BaseButton>
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
