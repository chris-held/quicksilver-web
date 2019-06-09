import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

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
    padding: 16,
  },
}));

const Header = ({ title }) => {
  const styles = useStyles();
  return (
    <div className={styles.border}>
      <Grid className={styles.root} container direction="row">
        <Grid item>
          <Typography variant="h2" className={styles.text}>
            {title}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
