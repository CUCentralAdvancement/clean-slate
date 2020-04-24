import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { Input, Label, Text } from 'theme-ui';

export default function TextInput({ label, ...props }) {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input {...field} {...props} color={meta.touched && meta.error ? 'colors.error' : 'inherit'} bg="background" />
      {meta.touched && meta.error ? (
        <Text mt={1} ml={2} color="error">
          {meta.error}
        </Text>
      ) : null}
    </>
  );
}

TextInput.propTypes = {
  /**
   * URL where the button goes once clicked.
   */
  label: PropTypes.string,
};

TextInput.defaultProps = {
  label: '',
};
