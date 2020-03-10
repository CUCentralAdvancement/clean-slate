import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { typography } from '../shared/styles';

const ELEMENTS = {
  SPAN: 'span',
  PARAGRAPH: 'p',
};

export function Heading({ size, children }) {
  let content = '';
  if (size === 'large') {
    content = <p>{children}</p>;
  } else if (size === 'small') {
    content = <span>{children}</span>;
  }

  return content;
}

Text.PropTypes = {
  as: PropTypes.oneOf(Object.values(ELEMENTS)),
};

Text.DefaultProps = {
  as: ELEMENTS.SPAN,
};
