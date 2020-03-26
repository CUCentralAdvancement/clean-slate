import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { Label, Select } from '@rebass/forms';

import { theme } from '../theme';

export function SelectInput({ label, ...props }) {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Select
        {...field}
        {...props}
        color={meta.touched && meta.error ? theme.colors.error : 'inherit'}
        fontFamily="body"
        bg="background"
      />
      {meta.touched && meta.error ? (
        <Text mt={1} ml={2} color="error" fontFamily="body">
          {meta.error}
        </Text>
      ) : null}
    </>
  );
}

SelectInput.propTypes = {
  /**
   * URL where the button goes once clicked.
   */
  label: PropTypes.string,
};

SelectInput.defaultProps = {
  label: '',
};
