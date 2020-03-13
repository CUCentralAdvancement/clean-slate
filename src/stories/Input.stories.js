import React from 'react';
import { Input } from '../components/Input';

export default {
  title: 'Atoms|Inputs',
  component: Input,
};

export const allInputs = () => (
  <div>
    <Input label="Name" />
    <br />
    <Input label="Password" type="password" />
  </div>
);
