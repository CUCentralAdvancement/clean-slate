import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as BaseCheckbox, Label } from 'theme-ui';

export default function Checkbox({ label, name, error, ...props }) {
  return (
    <>
      <Label>
        <BaseCheckbox name={name} {...props} />
        {label || name}
      </Label>
    </>
  );
}

Checkbox.propTypes = {
  /**
   * Label of input.
   */
  label: PropTypes.string,
  /**
   * Name of radio.
   */
  name: PropTypes.string,
  /**
   * Error message, if any.
   */
  error: PropTypes.string,
};

Checkbox.defaultProps = {
  label: '',
  name: '',
  error: '',
};
