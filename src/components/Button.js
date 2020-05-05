import React from 'react';
import PropTypes from 'prop-types';

import { Button as BaseButton } from 'theme-ui';

/**
 * Description of button component.
 */
export default function Button({ children, ...props }) {
  let styles = props.sx ? props.sx : {};

  if (props.isDisabled) {
    styles.opacity = 0.5;
    styles.cursor = 'not-allowed';
  }

  return (
    <BaseButton {...props} sx={styles}>
      {children}
    </BaseButton>
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
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  name: 'a button',
  isDisabled: false,
};
