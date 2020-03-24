import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'rebass';

/**
 * Description of button component.
 */
export function BaseButton(props) {
  let styles = {};
  if (props.isDisabled) {
    styles.opacity = 0.5;
  }

  return (
    <Button {...props} sx={styles}>
      {props.children}
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
};

BaseButton.defaultProps = {
  name: 'a button',
  isDisabled: false,
};
