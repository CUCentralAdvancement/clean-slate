import React from 'react';
import PropTypes from 'prop-types';
import { Label, Select, Box } from 'theme-ui';

export default function SelectInput({ label, error, ...props }) {
  return (
    <Box>
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      <Select {...props} color={error ? 'colors.error' : 'inherit'} bg="background" />
    </Box>
  );
}

SelectInput.propTypes = {
  /**
   * URL where the button goes once clicked.
   */
  label: PropTypes.string,
  /**
   * Error message, if any.
   */
  error: PropTypes.string,
};

SelectInput.defaultProps = {
  label: '',
  error: '',
};
