import React from 'react';
import PropTypes from 'prop-types';

import { Card, Text, Flex, Heading, Link, Box, Grid } from 'theme-ui';

function Header({ results }) {
  return (
    <>
      <Text color="primary" mb={2}>
        {results.length} Results
      </Text>
      <Text sx={{ display: 'inline-block', fontStyle: 'italic' }} mr={2}>
        Can't find what you're looking for?
      </Text>
      <Link
        sx={{
          display: 'inline-block',
          fontStyle: 'italic',
          textDecoration: 'none',
          color: 'link',
          ':hover': { textDecoration: 'underline' },
        }}
        href="https://giving.cu.edu/fund/write-fund"
      >
        Click here to use our write-in fund option.
      </Link>
    </>
  );
}

function FeaturedFund({ headerColors, res }) {
  return (
    <Box bg="black" sx={{ mr: -2, my: 2, height: '38px' }}>
      <Flex sx={{ flexDirection: 'row' }}>
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="34"
            viewBox="0 0 14 71"
            style={{ marginLeft: '-5px' }}
          >
            <g transform="translate(14) rotate(90)" fill={headerColors[res.campus]}>
              <path
                d="M 74.16190338134766 13.5 L 2.83809494972229 13.5 L 38.5 0.5320345163345337 L 74.16190338134766 13.5 Z"
                stroke="none"
              />
              <path
                d="M 38.5 1.064059257507324 L 5.676162719726562 13 L 71.32383728027344 13 L 38.5 1.064059257507324 M 38.5 0 L 77 14 L 0 14 L 38.5 0 Z"
                stroke="none"
                fill={headerColors[res.campus]}
              />
            </g>
          </svg>
        </Box>
        <Text ml="auto" p={2} fontSize={1}>
          Featured Fund
        </Text>
      </Flex>
    </Box>
  );
}

/**
 * Description of the search results component.
 */
export default function SearchResults({ results, ...props }) {
  const headerColors = {
    UCCS: '#298FCE',
    'CU Anschutz': '#0A9',
    'CU Denver': '#C63965',
    'CU Boulder': '#F29525',
  };

  return (
    <>
      <Box p={3}>
        <Header results={results} />
      </Box>
      <Grid gap={'16px'} columns={[1, 2, 3, 4]}>
        {results.map((res, index) => (
          <Card key={res.id.toString()}>
            <Link sx={{ textDecoration: 'none' }} color="text" href="#">
              <Flex sx={{ flexDirection: 'column', minHeight: 231 }}>
                <Box bg={headerColors[res.campus]} mx={-2} mt={-2} color="background">
                  <Flex>
                    <Text sx={{ flexGrow: 1, pl: 3, pt: 3, pb: 3, fontSize: 1 }}>{res.campus}</Text>
                    {res.featured == true && <FeaturedFund headerColors={headerColors} res={res}></FeaturedFund>}
                  </Flex>
                </Box>
                <Heading sx={{ mt: 2, p: 2, flexGrow: 1, fontSize: 3 }}>{res.title}</Heading>
                <Text p={2}>{res.interest}</Text>
              </Flex>
            </Link>
          </Card>
        ))}
      </Grid>
    </>
  );
}

SearchResults.propTypes = {
  /**
   * Results for current search.
   */
  results: PropTypes.array,
  resultsHeader: PropTypes.element,
};

SearchResults.defaultProps = {
  results: [],
  resultsHeader: null,
};
