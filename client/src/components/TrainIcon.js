import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  imageIcon: {
    height: '100%',
    width: theme.typography.h5.fontSize,
    verticalAlign: "middle",
  },
  iconRoot: {
    textAlign: 'center'
  }
}));


export default function TrainIcon(props) {
  const { train } = props
  const classes = useStyles();

  return (
    <Icon classes={{root: classes.iconRoot}}>
      <img alt="Train Icon" className={classes.imageIcon} src={process.env.PUBLIC_URL + 'svg/' + train.toLowerCase() + '.svg'}/>
    </Icon>
  )
}
