import React from 'react';
import PropTypes from 'prop-types';

import BaseButton from './BaseButton';
import BaseLink from './BaseLink';

/**
 * Description of the LinkButton component.
 */
export default function LinkButton({ children, url, isExternal, ...props }) {
  return (
    <BaseLink href={url} isExternal={isExternal}>
      <BaseButton {...props}>
        {children} {isExternal && <span>-></span>}
      </BaseButton>
    </BaseLink>
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
