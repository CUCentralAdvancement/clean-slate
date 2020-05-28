import React, { Component } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../src/theme';

import { Button } from '../../src';

const realSearchData = [];
Object.keys(searchData).forEach((key) => {
  if (searchData[key].featured == true) {
    realSearchData.unshift(searchData[key]);
  } else {
    realSearchData.push(searchData[key]);
  }
});

export default class Demo extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Button variant="primary">Hit Me!</Button>
          <Button variant="secondary">No Don't!</Button>
        </div>
      </ThemeProvider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
