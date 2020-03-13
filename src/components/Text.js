import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { typography } from '../shared/styles';

const ELEMENTS = {
  SPAN: 'span',
  PARAGRAPH: 'p',
};

export function Text({ As, children, styles }) {
  let content = '';
  if (As === 'p') {
    content = <p style={styles}>{children}</p>;
  } else if (As === 'span') {
    content = <span style={styles}>{children}</span>;
  } else if (As === 'blockquote') {
    content = <blockquote style={styles}>{children}</blockquote>;
  }

  return content;
}

Text.propTypes = {
  as: PropTypes.oneOf(Object.values(ELEMENTS)),
  styles: PropTypes.object,
};

Text.defaultProps = {
  as: ELEMENTS.SPAN,
  styles: {},
};
