import React from 'react';
import { Box } from 'rebass';
import SearchResults from '../src/components/SearchResults';
import { searchData } from './results.js';

const realSearchData = Object.keys(searchData).map((key) => {
  return searchData[key];
});

export default {
  title: 'Molecules/Search Results',
  component: SearchResults,
};

export const searchStuff = () => (
  <Box maxWidth={1280} mx="auto">
    <SearchResults results={realSearchData} />
  </Box>
);
