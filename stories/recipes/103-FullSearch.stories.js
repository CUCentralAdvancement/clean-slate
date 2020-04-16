import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Box, Flex } from 'rebass';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import { searchData } from './results.js';

const realSearchData = [];
Object.keys(searchData).forEach((key) => {
  if (searchData[key].featured == true) {
    realSearchData.unshift(searchData[key]);
  } else {
    realSearchData.push(searchData[key]);
  }
});

export default {
  title: 'Recipes/Full Search',
};

export const fullSearch = () => {
  const [results, setResults] = useState(realSearchData);
  function submitHandler(values) {
    const newResults = realSearchData.filter((res) => {
      if (values.campus !== 'All') {
        return res.field_campuses_tid === values.campus;
      }
      if (values.interest !== 'All') {
        return res.field_fund_interests_tid === values.interest;
      }
      if (values.fundType !== 'All') {
        return res.field_fund_type_tid === values.fundType;
      }
      if (values.search !== '') {
        return res.title.toLowerCase().includes(values.search.toLowerCase());
      }
      return true;
    });
    setResults(newResults);
    action('Searched');
  }

  return (
    <>
      <Flex bg="gray" p={3}>
        <Box width={[1, 1, 2 / 3]} mx="auto">
          <SearchForm submitHandler={submitHandler} resetHandler={() => setResults(realSearchData)} />
        </Box>
      </Flex>
      <Box maxWidth={1280} mx="auto">
        <SearchResults results={results} />
      </Box>
    </>
  );
};