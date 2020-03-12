import React from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default {
  title: 'Molecules|Login Form',
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
