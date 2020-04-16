import React, { Component } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../src/theme';

import { SearchForm, SearchResults } from '../../src';
import { searchData } from '../../stories/results';

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
        <div style={{ backgroundColor: 'gray', padding: '8px' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <SearchForm />
          </div>
        </div>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <SearchResults results={realSearchData} />
        </div>
      </ThemeProvider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
