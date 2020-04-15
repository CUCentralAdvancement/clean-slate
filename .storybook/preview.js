import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../src/theme.js';
import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
// import { GlobalStyle } from "../src/shared/global";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(withA11y);

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <div style={{ fontFamily: theme.fonts.body }}>{story()}</div>
  </ThemeProvider>
));
