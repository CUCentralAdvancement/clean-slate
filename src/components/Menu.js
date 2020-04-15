import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Heading, Box } from 'rebass';

import BaseLink from './BaseLink';

/**
 * Description of Menu component.
 */
export default function Menu({ links, title, variant, linkDirection }) {
  return (
    <Box variant={variant + '.box'}>
      <Heading variant={variant + '.heading'}>{title}</Heading>
      <Flex as="nav" flexDirection={linkDirection} role="navigation">
        {links.map((link) => (
          <BaseLink url={link.url} variant={variant + '.links'}>
            {link.title}
          </BaseLink>
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
