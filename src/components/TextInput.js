import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, Text, Box } from 'theme-ui';

export default function TextInput({ label, error, ...props }) {
  return (
    <Box>
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      <Input
        {...props}
        type="text"
        color={error !== '' ? 'colors.error' : 'inherit'}
        sx={{ bg: 'background', borderColor: 'rgb(204, 204, 204)', borderRadius: 0 }}
      />
    </Box>
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
