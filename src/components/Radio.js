import React from 'react';
import PropTypes from 'prop-types';
import { Radio as BaseRadio, Label, Text } from 'theme-ui';

export default function Radio({ label, name, error, ...props }) {
  return (
    <>
      <Label>
        <BaseRadio name={name} {...props} />
        {label || name}
      </Label>
    </>
  );
}

Radio.propTypes = {
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

Radio.defaultProps = {
  label: '',
  name: '',
  error: '',
};
