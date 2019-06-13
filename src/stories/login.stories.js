import React from 'react';

import { storiesOf } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';
import Login from '../components/Login';

storiesOf('Login', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Default', () => <Login />);
