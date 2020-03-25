import React, { Component } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../src/theme';

import { LinkButton } from '../../src';

export default class Demo extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <h1>component-library Demo</h1>
        <LinkButton url="https://www.google.com" isExternal={true}>
          Google It
        </LinkButton>
      </ThemeProvider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
