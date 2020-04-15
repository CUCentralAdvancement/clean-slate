import React from 'react';
import { text, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Box, Heading } from 'rebass';
import Menu from '../src/components/Menu';

export default {
  title: 'Molecules/Menu',
  component: Menu,
};

const menuLinks = [
  { id: 1, title: 'One', url: 'www.google.com?q=One' },
  { id: 2, title: 'Two', url: 'www.google.com?q=Two' },
  { id: 3, title: 'Three', url: 'www.google.com?q=Three' },
];

export const darkBackgroundMenu = () => (
  <Box width={[1, 1, 2 / 3]} mx="auto">
    <Heading mb={2}>Column</Heading>
    <Box bg="#000" mb={4}>
      <Menu title="My Menu" links={menuLinks} variant="menu.bgDark" linkDirection="column" />
    </Box>
    <Heading mb={2}>Row</Heading>
    <Box bg="#000">
      <Menu title="My Menu" links={menuLinks} variant="menu.bgDark" linkDirection="row" />
    </Box>
  </Box>
);
