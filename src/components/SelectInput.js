import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'theme-ui';
import Select from 'react-select';

const customStyles = {
  indicatorsContainer: (provided, state) => ({
    ...provided,
    backgroundColor: '#000',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    backgroundColor: 'inherit',
  }),
};

export default function SelectInput({ label, error, ...props }) {
  return (
    <>
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      <Select {...props} styles={customStyles} color={error ? 'colors.error' : 'inherit'} bg="background" />
    </>
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
