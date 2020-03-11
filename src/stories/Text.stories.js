import React from 'react';
import { select } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { Text } from '../components/Text';

const OutlineContainer = styled.div`
  border: 1px solid green;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

const label = 'Text Types';
const options = {
  span: 'span',
  paragraph: 'p',
  blockquote: 'blockquote',
};
const defaultValue = 'span';
const groupId = 'GROUP-ID1';

export default {
  title: 'Atoms|Text',
  component: Text,
};

export const allText = () => (
  <div>
    <h2>As a span, blockquote, or paragraph</h2>
    <OutlineContainer>
      <Text styles={{ backgroundColor: 'lightblue' }} As={select(label, options, defaultValue, groupId)}>
        doopty doo
      </Text>
    </OutlineContainer>
  </div>
);
