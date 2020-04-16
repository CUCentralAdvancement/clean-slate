import React from 'react';
import { text, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Flex, Box } from 'rebass';
import SearchForm from './SearchForm';

export default {
  title: 'Recipes/Search Form',
  component: SearchForm,
};

export const searchForm = () => (
  <Flex bg="gray" p={3}>
    <Box width={[1, 1, 2 / 3]} mx="auto">
      <SearchForm submitHandler={action('Searched')} />
    </Box>
  </Flex>
);
