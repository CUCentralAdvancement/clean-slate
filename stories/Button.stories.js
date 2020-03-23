import React from 'react';

import { Button } from '../src/components/Button';

export default {
  title: 'Atoms|Button',
  component: Button,
};

export const allText = () => (
  <div>
    <Button>One</Button>
    <Button isDisabled>Disabled</Button>
  </div>
);
