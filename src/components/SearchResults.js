import React from 'react';
import PropTypes from 'prop-types';

import { Card, Text, Flex, Heading, Link, Box } from 'rebass';

/**
 * Description of the search results component.
 */
export function SearchResults({ results, ...props }) {
  const headerColors = {
    UCCS: '#298FCE',
    'CU Anschutz': '#0A9',
    'CU Denver': '#C63965',
    'CU Boulder': '#F29525',
  };

  return (
    <Flex p={2} flexWrap="wrap">
      {results.map((res, index) => (
        <Card key={res.id.toString()} width={['100%', '47%', '31%', '23%']} m={2}>
          <Link sx={{ textDecoration: 'none' }} color="text" href="#">
            <Flex flexDirection="column" minHeight={231}>
              <Box bg={headerColors[res.campus]} mx={-2} mt={-2} color="background">
                <Flex>
                  <Text flexGrow={1} pl={3} pt={3} pb={3} fontSize={1}>
                    {res.campus}
                  </Text>
                  {res.featured && <FeaturedFund headerColors={headerColors} res={res}></FeaturedFund>}
                </Flex>
              </Box>
              <Heading mt={2} p={2} flexGrow={1} fontSize={3}>
                {res.title}
              </Heading>
              <Text p={2}>{res.interest}</Text>
            </Flex>
          </Link>
        </Card>
      ))}
    </Flex>
  );
}

function FeaturedFund({ headerColors, res }) {
  return (
    <Box bg="black" width={'50'} mr={-2} my={2}>
      <Flex flexDirection="row">
        <Box height="100%">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="30"
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

SearchResults.propTypes = {
  /**
   * Results for current search.
   */
  results: PropTypes.array,
};

SearchResults.defaultProps = {
  results: [],
};
