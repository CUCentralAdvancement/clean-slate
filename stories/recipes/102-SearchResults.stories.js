import React from 'react';
import { Box } from 'theme-ui';
import SearchResults from './SearchResults';
import { searchData } from './results.js';

const realSearchData = Object.keys(searchData).map((key) => {
  return searchData[key];
});

export default {
  title: 'Recipes/Search Results',
  component: SearchResults,
};

export const searchResults = () => (
  <Box maxWidth={1280} mx="auto">
    <SearchResults results={realSearchData} />
  </Box>
);
