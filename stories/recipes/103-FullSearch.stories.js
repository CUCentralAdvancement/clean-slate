import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Box, Flex } from 'theme-ui';
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
    console.log(values);
    const newResults = realSearchData.filter((res) => {
      if (typeof values.campus !== 'undefined') {
        return res.field_campuses_tid === values.campus;
      }
      if (typeof values.interest !== 'undefined') {
        return res.field_fund_interests_tid === values.interest;
      }
      if (typeof values.fundType !== 'undefined') {
        return res.field_fund_type_tid === values.fundType;
      }
      if (values.search !== '') {
        console.log(res.title, values.search);
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
        <Box sx={{ width: ['95%', 960], mx: 'auto' }}>
          <SearchForm submitHandler={submitHandler} resetHandler={() => setResults(realSearchData)} />
        </Box>
      </Flex>
      <Box sx={{ maxWidth: 960, mx: 'auto', px: 2 }}>
        <SearchResults results={results} />
      </Box>
    </>
  );
};
