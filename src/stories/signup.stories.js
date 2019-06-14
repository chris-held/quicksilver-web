import React from 'react';

import { storiesOf } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';
import Signup from '../components/Signup';

storiesOf('Signup', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Default', () => <Signup />);
