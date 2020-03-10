import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { typography } from '../shared/styles';

// const ELEMENTS = {
//   SPAN: 'span',
//   PARAGRAPH: 'p',
// };

/* eslint-disable */
function slugify(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function Input({ label, placeholder, value, type }) {
  const slug = slugify(label);

  return (
    <>
      <label for={slug}>{label}</label>
      <input type={type} name={slug} placeholder={placeholder} value={value}></input>
    </>
  );
}

Text.PropTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

Text.DefaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  value: '',
};
