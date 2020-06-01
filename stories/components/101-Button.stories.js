import React from 'react';
import { text, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import BaseButton from '../../src/components/Button';
import ActionButton from '../../src/components/ActionButton';
import LinkButton from '../../src/components/LinkButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/pro-regular-svg-icons';

export default {
  title: 'Components/Button',
  component: Button,
};

const paddingOptions = {
  range: true,
  min: 1,
  max: 9,
  step: 1,
};

const variants = { primary: 'button.primary', secondary: 'button.secondary', outline: 'button.outline' };

function Button(props) {
  return <BaseButton {...props} mr={2}></BaseButton>;
}

export const allButtons = () => (
  <div>
    <span>Knobs: </span>
    <Button variant={select('Variants', variants, 'button.primary')} p={number('Padding', 2, paddingOptions)}>
      {text('Button Text', 'Click Me!')}
    </Button>
    <hr />
    <Button variant="button.primary">Primary</Button>
    <Button variant="button.secondary">Secondary</Button>
    <Button variant="button.outline">Outline</Button>

    <Button isDisabled>Disabled</Button>
  </div>
);

export const actionButtons = () => (
  <div>
    <ActionButton handleClick={action('button clicked')}>Button</ActionButton>
  </div>
);

export const linkButtons = () => (
  <div>
    <LinkButton url="https://www.google.com" isExternal={true} icon={<FontAwesomeIcon icon={faExternalLinkAlt} />}>
      Google It
    </LinkButton>
    <LinkButton url="https://www.google.com">Internal Link</LinkButton>
  </div>
);
