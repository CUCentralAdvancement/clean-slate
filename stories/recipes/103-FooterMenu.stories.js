import React from 'react';
import { Box, Flex, Text, Grid } from 'theme-ui';
import Menu from '../../src/components/Menu';
import LinkButton from '../../src/components/LinkButton';
import { menuLinks } from './menus';

export default {
  title: 'Recipes/Footer Menu',
};

const PaddedText = ({ children }) => <Text sx={{ pl: [1, 0], pb: 1 }}>{children}</Text>;

export const fourColumnsDark = () => (
  <Box bg="#000" p={3}>
    <Grid gap={2} columns={[1, 2, 4]}>
      <Flex sx={{ py: 2, pl: [3, 0], flexDirection: 'column' }} color="#fff" fontWeight="light">
        <LinkButton
          url="https://www.google.com"
          variant="primary"
          sx={{ px: 4, color: 'text', fontSize: 3, mb: 2, fontWeight: 300 }}
        >
          Give Now
        </LinkButton>
        <PaddedText>CU Advancement | CU Foundation</PaddedText>
        <PaddedText>CU Advancement | CU Foundation</PaddedText>
        <PaddedText>1800 Grant Street | Denver, CO 80203</PaddedText>
        <PaddedText>303-541-1290</PaddedText>
        <PaddedText>giving@cu.edu</PaddedText>
        <PaddedText>Privacy Policy | Terms of Service</PaddedText>
      </Flex>
      <Box>
        <Menu title="About" links={menuLinks.about} variant="bgDark" linkDirection="column" />
      </Box>
      <Box>
        <Menu title="Quick Links" links={menuLinks.quicklinks} variant="bgDark" linkDirection="column" />
      </Box>
      <Box>
        <Menu title="Campuses" links={menuLinks.campuses} variant="bgDark" linkDirection="column" />
      </Box>
    </Grid>
  </Box>
);

export const fourColumnsLight = () => (
  <Box bg="#fff" p={3}>
    <Grid gap={2} columns={[1, 2, 4]}>
      <Flex sx={{ py: 2, pl: [3, 0], flexDirection: 'column' }} color="#000" fontWeight="light">
        <LinkButton
          url="https://www.google.com"
          variant="primary"
          sx={{ px: 4, color: 'text', fontSize: 3, mb: 2, fontWeight: 300 }}
        >
          Give Now
        </LinkButton>
        <PaddedText>CU Advancement | CU Foundation</PaddedText>
        <PaddedText>CU Advancement | CU Foundation</PaddedText>
        <PaddedText>1800 Grant Street | Denver, CO 80203</PaddedText>
        <PaddedText>303-541-1290</PaddedText>
        <PaddedText>giving@cu.edu</PaddedText>
        <PaddedText>Privacy Policy | Terms of Service</PaddedText>
      </Flex>
      <Box>
        <Menu title="About" links={menuLinks.about} variant="bgLight" linkDirection="column" />
      </Box>
      <Box>
        <Menu title="Quick Links" links={menuLinks.quicklinks} variant="bgLight" linkDirection="column" />
      </Box>
      <Box>
        <Menu title="Campuses" links={menuLinks.campuses} variant="bgLight" linkDirection="column" />
      </Box>
    </Grid>
  </Box>
);
