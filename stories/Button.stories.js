import React from 'react';
import { text } from '@storybook/addon-knobs';

import { Button } from '../src/components/Button';

export default {
  title: 'Atoms|Button',
  component: Button,
};

export const allText = () => (
  <div>
    <Button>{text('Button Text', 'Click Me!')}</Button>
    <Button isDisabled>Disabled</Button>
  </div>
);
