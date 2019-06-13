import React, { Fragment } from 'react';
import { Typography, Container } from '@material-ui/core';
import Header from './Header';

const Dashboard = () => (
  <Fragment>
    <Header title="Dashboard" subtitle="Rhymes with Smashboard" />
    <Container>
      <Typography variant="body1">
        Hello there! This is some placeholder text.
      </Typography>
    </Container>
  </Fragment>
);

export default Dashboard;
