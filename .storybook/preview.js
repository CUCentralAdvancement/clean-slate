import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../src/theme.js';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

// import { GlobalStyle } from "../src/shared/global";

addDecorator(withA11y);
addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
