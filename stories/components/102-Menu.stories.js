import React from 'react';
import { Box, Heading } from 'theme-ui';
import Menu from '../../src/components/Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
};

const menuLinks = [
  { id: 1, title: 'One', url: 'www.google.com?q=One' },
  { id: 2, title: 'Two', url: 'www.google.com?q=Two' },
  { id: 3, title: 'Three', url: 'www.google.com?q=Three' },
];

export const darkBackgroundMenu = () => (
  <Box sx={{ maxWidth: 1280, mx: 'auto' }}>
    <Heading mb={2}>Column</Heading>
    <Box bg="#000" mb={4}>
      <Menu title="My Menu" links={menuLinks} variant="bgDark" linkDirection="column" />
    </Box>
    <Heading mb={2}>Row</Heading>
    <Box bg="#000">
      <Menu title="My Menu" links={menuLinks} variant="bgDark" linkDirection="row" />
    </Box>
  </Box>
);
