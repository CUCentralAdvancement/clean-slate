import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { Button } from '../components/Button';
import { StoryLinkWrapper } from '../StoryLinkWrapper';

const CustomButton = styled.button`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

function ButtonWrapper(props) {
  return <CustomButton onClick={action('button action click')} {...props} />;
}

export default {
  title: 'Atoms|Button',
  component: Button,
  parameters: {
    assets: ['https://xd.adobe.com/embed/346520e5-a8ad-4e03-4f64-b3afb2a77ff2-4254/'],
  },
};

export const allButtons = () => (
  <div>
    <h2>Regular</h2>
    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="tertiary">Tertiary</Button>
    <Button appearance="outline">Outline</Button>
    <Button appearance="primary" isDisabled>
      Disabled
    </Button>
    <br />
    <h2>Small</h2>
    <Button appearance="primary" size="small">
      Primary
    </Button>
    <Button appearance="secondary" size="small">
      Secondary
    </Button>
    <Button appearance="tertiary" size="small">
      Tertiary
    </Button>
    <Button appearance="outline" size="small">
      Outline
    </Button>
    <Button appearance="primary" isDisabled size="small">
      Disabled
    </Button>
  </div>
);

allButtons.story = {
  name: 'All Buttons',
};

export const buttonWrapper = () => (
  <div>
    <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance="primary">
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondary">
      Secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="tertiary">
      Tertiary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline">
      Outline
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="primaryOutline">
      Outline primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondaryOutline">
      Outline secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" isDisabled>
      Disabled
    </Button>
  </div>
);

buttonWrapper.story = {
  name: 'With Action',
};

export const anchorWrapper = () => (
  <div>
    <StoryLinkWrapper to="http://storybook.js.org">Original Link Wrapper</StoryLinkWrapper>
    <br />
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" href="http://giving.cu.edu">
      Primary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="secondary" href="http://www.google.com">
      Secondary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="tertiary" href="http://storybook.js.org">
      Tertiary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="outline" href="http://storybook.js.org">
      Outline
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primaryOutline" href="http://storybook.js.org">
      Outline primary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="secondaryOutline" href="http://storybook.js.org">
      Outline secondary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" isDisabled href="http://storybook.js.org">
      Disabled
    </Button>
    <br />
  </div>
);

anchorWrapper.story = {
  name: 'As Link',
};
