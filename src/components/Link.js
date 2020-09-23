import React from 'react';
import PropTypes from 'prop-types';
import { Link as BaseLink, Box } from 'theme-ui';

/**
 * Description of Link component.
 */
export default function Link({ children, url, isExternal, ...props }) {
  let styles = {};

  // if (isDisabled) {
  //   styles.opacity = 0.5;
  //   styles.cursor = 'not-allowed';
  // }

  return (
    <BaseLink {...props} sx={(styles, { ...props.sx })} target={isExternal ? '_blank' : '_self'} href={url}>
      {children}
    </BaseLink>
  );
}

Link.propTypes = {
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

Link.defaultProps = {
  url: '',
  target: '_self',
};
