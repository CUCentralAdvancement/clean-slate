import React from 'react';
import { text, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Flex, Box } from 'theme-ui';
import SearchForm from './SearchForm';

export default {
  title: 'Recipes/Search Form',
  component: SearchForm,
};

export const searchForm = () => (
  <Flex sx={{ bg: 'gray', p: 3, justifyContent: 'center' }}>
    <SearchForm submitHandler={action('Searched')} />
  </Flex>
);
