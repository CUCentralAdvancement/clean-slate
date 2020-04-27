import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, Text } from 'theme-ui';

export default function TextInput({ label, error, ...props }) {
  return (
    <>
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      <Input {...props} color={error !== '' ? 'colors.error' : 'inherit'} bg="background" />
    </>
  );
}

TextInput.propTypes = {
  /**
   * Label of input.
   */
  label: PropTypes.string,
  /**
   * Error message, if any.
   */
  error: PropTypes.string,
};

TextInput.defaultProps = {
  label: '',
  error: '',
};
