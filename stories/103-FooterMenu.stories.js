import React from 'react';
import { Box, Flex, Text } from 'rebass';
import Menu from '../src/components/Menu';
import LinkButton from '../src/components/LinkButton';
import { menuLinks } from './menus';

export default {
  title: 'Organisms/Footer Menu',
  // component: SearchResults,
};

const PaddedText = ({ children }) => (
  <Text pl={[1, 0]} pb={1}>
    {children}
  </Text>
);

export const fourColumns = () => (
  <Box bg="#000">
    <Flex maxWidth={1280} p={3} mx="auto" flexDirection={['column', 'row']}>
      <Flex width={['100%', '25%']} flexDirection="column" color="#fff" py={2} pl={[3, 0]} fontWeight="light">
        <LinkButton variant="button.primary" sx={{ px: 4, color: 'text', fontSize: 3, mb: 2, fontWeight: 300 }}>
          Give Now
        </LinkButton>
        <PaddedText>CU Advancement | CU Foundation</PaddedText>
        <PaddedText>CU Advancement | CU Foundation</PaddedText>
        <PaddedText>1800 Grant Street | Denver, CO 80203</PaddedText>
        <PaddedText>303-541-1290</PaddedText>
        <PaddedText>giving@cu.edu</PaddedText>
        <PaddedText>Privacy Policy | Terms of Service</PaddedText>
      </Flex>
      <Box width={['100%', '25%']}>
        <Menu title="About" links={menuLinks.about} variant="menu.bgDark" linkDirection="column" />
      </Box>
      <Box width={['100%', '25%']}>
        <Menu title="Quick Links" links={menuLinks.quicklinks} variant="menu.bgDark" linkDirection="column" />
      </Box>
      <Box width={['100%', '25%']}>
        <Menu title="Campuses" links={menuLinks.campuses} variant="menu.bgDark" linkDirection="column" />
      </Box>
    </Flex>
  </Box>
);
