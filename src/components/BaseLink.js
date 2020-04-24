import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'theme-ui';

/**
 * Description of BaseLink component.
 */
export default function BaseLink({ children, url, isExternal, ...props }) {
  let styles = {};

  // if (isDisabled) {
  //   styles.opacity = 0.5;
  //   styles.cursor = 'not-allowed';
  // }

  return (
    <Link {...props} sx={(styles, { ...props.sx })} target={isExternal ? '_blank' : '_self'} href={url}>
      {children}
    </Link>
  );
}

BaseLink.propTypes = {
  /**
   * URL visited when user clicks link.
   */
  url: PropTypes.string,
  /**
   * Target of link. Follows the HTML spec for target names.
   */
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
};

BaseLink.defaultProps = {
  url: '',
  target: '_self',
};
