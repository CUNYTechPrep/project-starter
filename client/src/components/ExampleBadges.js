import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/box';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function SimpleBadge() {
  const classes = useStyles();

  return (
    <Box mt={3}>
      <div className={classes.root}>
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="secondary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </div>
    </Box>
  );
}
