import React, { Component } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../src/theme';

import { BaseButton } from '../../src';

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
          <BaseButton variant="primary">Hit Me!</BaseButton>
          <BaseButton variant="secondary">No Don't!</BaseButton>
        </div>
      </ThemeProvider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
