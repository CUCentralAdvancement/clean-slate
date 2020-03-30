import React from 'react';
import { text, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import BaseButton from '../src/components/BaseButton';
import ActionButton from '../src/components/ActionButton';
import LinkButton from '../src/components/LinkButton';

export default {
  title: '101-Atoms/101-Button',
  component: Button,
};

const paddingOptions = {
  range: true,
  min: 1,
  max: 9,
  step: 1,
};

function Button(props) {
  return <BaseButton {...props} mr={2}></BaseButton>;
}

export const allButtons = () => (
  <div>
    <span>Knobs: </span>
    <Button
      variant={select('Variants', { primary: 'primary', secondary: 'secondary', outline: 'outline' }, 'primary')}
      sx={{
        fontSize: 1,
        textTransform: 'uppercase',
        borderRadius: 99999,
      }}
      mb={2}
      p={number('Padding', 2, paddingOptions)}
    >
      {text('Button Text', 'Click Me!')}
    </Button>
    <hr />
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>

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
    <LinkButton url="https://www.google.com" isExternal={true}>
      Google It
    </LinkButton>
  </div>
);
