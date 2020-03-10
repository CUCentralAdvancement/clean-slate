import React from 'react';
import { Input } from '../components/Input';

export default {
  title: 'Components|Text',
  component: Input,
  // parameters: {
  //   assets: ['https://xd.adobe.com/embed/346520e5-a8ad-4e03-4f64-b3afb2a77ff2-4254/'],
  // },
};

export const allInputs = () => (
  <div>
    <Input label="Name" />
    <br />
    <Input label="Password" type="password" />
  </div>
);
