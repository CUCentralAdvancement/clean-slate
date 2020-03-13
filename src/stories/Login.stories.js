import React from 'react';
import { actions } from '@storybook/addon-actions';

import { LoginForm } from '../components/LoginForm';

export default {
  title: 'Molecules|Login Form',
};

const eventsFromObject = actions({ onClick: 'clicked', onMouseOver: 'hovered' });
export const Default = () => <LoginForm {...eventsFromObject} />;
