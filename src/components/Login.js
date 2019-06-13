import React, { Fragment } from 'react';
import { Container, Button, Grid } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import loginSchema from '../schemas/Login';

const Login = ({ history }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const submitClick = (values) => {
    console.log('login was clicked', values);
    history.push('/');
  };

  return (
    <Fragment>
      <Header title="Login" subtitle="Log In to Continue" />
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
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
                  <Button
                    onClick={submitForm}
                    disabled={!(isValid || isValidating)}
                    type="submit"
                    variant="outlined"
                    color="primary"
                  >
                    Submit
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
Login.propTypes = {
  history: PropTypes.object.isRequired,
};
export default withRouter(Login);
