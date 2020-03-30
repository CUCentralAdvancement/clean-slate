import React from 'react';
import { text, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Box } from 'rebass';
import SearchResults from '../src/components/SearchResults';
import { searchData } from './results.js';

const realSearchData = Object.keys(searchData).map((key) => {
  return searchData[key];
});

console.log(realSearchData);

export default {
  title: 'Molecules/Search Results',
  component: SearchResults,
};

export const searchStuff = () => (
  <Box maxWidth={1280} mx="auto">
    <SearchResults results={realSearchData} />
  </Box>
);
