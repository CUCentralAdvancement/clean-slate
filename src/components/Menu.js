import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Heading, Box } from 'theme-ui';
import Link from './Link';

/**
 * Description of Menu component.
 */
export default function Menu({ links, title, variant, linkDirection }) {
  return (
    <Box sx={styles[variant].box}>
      <Heading sx={styles[variant].heading}>{title}</Heading>
      <Flex as="nav" sx={{ flexDirection: linkDirection }} role="navigation">
        {links.map((link) => (
          <Link url={link.url} sx={styles[variant].links}>
            {link.title}
          </Link>
        ))}
      </Flex>
    </Box>
  );
}

Menu.propTypes = {
  /**
   * The name of the button.
   */
  title: PropTypes.string,
  /**
   * If disabled, the button has less opacity and can't be clicked.
   */
  links: PropTypes.array,
};

Menu.defaultProps = {
  title: 'Menu',
  links: [{}],
};

export const styles = {
  bgDark: {
    box: {
      p: 3,
      color: 'white',
    },
    heading: {
      mb: 2,
    },
    links: {
      p: 1,
      fontWeight: 'light',
      color: 'white',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
  },
};
