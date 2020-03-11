import React from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default {
  title: 'Molecules|Login Form',
  component: Text,
  // parameters: {
  //   assets: ['https://xd.adobe.com/embed/346520e5-a8ad-4e03-4f64-b3afb2a77ff2-4254/'],
  // },
};

export const Default = () => (
  <div>
    <Input label="Name" />
    <br />
    <Input label="Password" type="password" />
    <br />
    <Button appearance="primary">Login</Button>
  </div>
);
