import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Link from './Link';

/**
 * Description of the LinkButton component.
 */
export default function LinkButton({ children, url, isExternal, ...props }) {
  return (
    <Link href={url} isExternal={isExternal}>
      <Button {...props}>
        {children} {isExternal && <span>-></span>}
      </Button>
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
