import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'rebass';

/**
 * Description of button component.
 */
export default function BaseButton({ children, ...props }) {
  let styles = props.sx ? props.sx : {};

  if (props.isDisabled) {
    styles.opacity = 0.5;
    styles.cursor = 'not-allowed';
  }

  return (
    <Button {...props} sx={styles}>
      {children}
    </Button>
  );
}

BaseButton.propTypes = {
  /**
   * The name of the button.
   */
  name: PropTypes.string,
  /**
   * If disabled, the button has less opacity and can't be clicked.
   */
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

BaseButton.defaultProps = {
  name: 'a button',
  isDisabled: false,
};
