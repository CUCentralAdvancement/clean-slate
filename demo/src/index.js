import React, { Component } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../src/theme';

import { BaseButton as Button } from '../../src';

export default class Demo extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <h1>component-library Demo</h1>
        <Button variant="primary" isDisabled>
          Nooo
        </Button>
      </ThemeProvider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
