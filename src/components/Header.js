import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { Typography, Container } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.colors.grey.dark,
  },
  border: {
    background: theme.coolGradient,
    paddingBottom: 5,
  },
  text: {
    color: theme.colors.white,
    paddingBottom: 16,
  },
}));

const Header = ({ title }) => {
  const styles = useStyles();
  return (
    <div className={styles.border}>
      <Grid className={styles.root} container direction="row">
        <Container>
          <Typography variant="h2" className={styles.text}>
            {title}
          </Typography>
        </Container>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'You forgot to set a title!',
};

export default Header;
