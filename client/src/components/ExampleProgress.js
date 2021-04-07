import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/box';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <Box mt={3}>
      <div className={classes.root}>
        <CircularProgress />
        <CircularProgress color="secondary" />
      </div>
    </Box>
  );
}
