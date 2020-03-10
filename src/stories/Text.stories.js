import React from 'react';
import { Text } from '../components/Text';

export default {
  title: 'Components|Text',
  component: Text,
  // parameters: {
  //   assets: ['https://xd.adobe.com/embed/346520e5-a8ad-4e03-4f64-b3afb2a77ff2-4254/'],
  // },
};

export const allText = () => (
  <div>
    <h2>As Span</h2>
    <Text As="span">doopty doo</Text>
    <h2>As Paragraph</h2>
    <Text As="p">doopty doo</Text>
  </div>
);
