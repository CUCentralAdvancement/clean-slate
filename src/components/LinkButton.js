import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'rebass';
import BaseButton from './BaseButton';

/**
 * Description of the action button component.
 */
export default function LinkButton({ children, url, isExternal, ...props }) {
  // @todo Add some kind of checking around url and altText. Could use Yup for this.
  return (
    <Link href={url} target={isExternal ? '_blank' : '_self'}>
      <BaseButton {...props}>
        {children} {isExternal && <span>-></span>}
      </BaseButton>
    </Link>
  );
}

LinkButton.propTypes = {
  /**
   * URL where the button goes once clicked.
   */
  url: PropTypes.string,
  /**
   * Places an icon next to the button text letting users know the link is external.
   */
  isExternal: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

LinkButton.defaultProps = {
  url: '',
  isExternal: false,
};
