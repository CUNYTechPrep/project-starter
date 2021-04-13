import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// Custom Components
import TrainIcon from './TrainIcon.js'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    maxWidth: 345,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  divider: {
    marginTop: theme.spacing(-2),
  },
}));

function getDifference(epoch, curTime) {
  var epochDate = new Date(0); // The 0 there is the key, which sets the date to the epoch
  epochDate.setUTCSeconds(epoch)
  const diff = epochDate - curTime
  const inMinutes = diff/(1000*60)
  if(inMinutes < 0)
    return "Departed"
  else if(inMinutes >= 1)
    return inMinutes.toFixed(0) + ' min'
  else
    return "Now"
}

export default function StopCard(props) {
  const {stopId, stopInfo, curTime} = props
  var trains = stopInfo.trains
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [favorite, setFavorite] = React.useState("default")
  const handleColor = () => {
    setFavorite(favorite === "default" ? "secondary" : "default");
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="favorite" color = {favorite} onClick = {handleColor}>
            <FavoriteIcon/>
          </IconButton>
        }
        title={stopInfo.stopName}
        subheader={stopId}
      />
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Divider className={classes.divider}/>
          <Box mt={2}/>
          <Grid container>
            <Grid item xs={6} sm={6} lg={6}>
              <Grid container direction="row">
                <Typography>
                  Uptown
                </Typography>
                <Box ml={1}/>
                <ArrowUpwardIcon/>
              </Grid>
              <Box mt={2}/>
              {
                Object.keys(trains).map((key, i) => 
                  <Typography key={i}>
                    <Box component="span" mr={2}>
                      <TrainIcon train={key}/>
                    </Box>
                    {trains[key]['uptown'] ? getDifference(trains[key]['uptown'], curTime) : 'N/A'}
                  </Typography>
                )
              }
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Grid container direction="row">
                  <Typography>
                    Downtown
                  </Typography>
                  <Box ml={1}/>
                  <ArrowDownwardIcon/>
              </Grid>
              <Box mt={2}/>
              {
                Object.keys(trains).map((key, i) => 
                  <Typography key={i}>
                    <Box component="span" mr={2}>
                      <TrainIcon train={key}/>
                    </Box>
                    {trains[key]['downtown'] ? getDifference(trains[key]['downtown'], curTime) : 'N/A'}
                  </Typography>
                )
              }
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
