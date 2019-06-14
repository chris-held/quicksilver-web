import React, { Fragment } from 'react';
import { Container, Button, Grid } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import signupSchema from '../schemas/Signup';

const Signup = ({ history }) => {
  const initialValues = {
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const submitClick = (values) => {
    console.log('signup was clicked', values);
    history.push('/');
  };

  return (
    <Fragment>
      <Header title="Signup" subtitle="Create an Account" />
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={submitClick}
        >
          {({ isValid, isValidating, submitForm }) => (
            <Form>
              <Grid container spacing={4} direction="row">
                <Grid item xs={12}>
                  <Field
                    name="email"
                    type="text"
                    id="email"
                    label="Email"
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="password"
                    type="password"
                    id="password"
                    label="Password"
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="passwordConfirmation"
                    type="password"
                    id="passwordConfirmation"
                    label="Confirm Password"
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button
                    onClick={submitForm}
                    disabled={!(isValid || isValidating)}
                    type="submit"
                    variant="outlined"
                    color="primary"
                  >
                    Submit
                  </Button>
                  <Button
                    onClick={() => {
                      history.push('/login');
                    }}
                    type="submit"
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </Fragment>
  );
};
Signup.propTypes = {
  history: PropTypes.object.isRequired,
};
export default withRouter(Signup);
