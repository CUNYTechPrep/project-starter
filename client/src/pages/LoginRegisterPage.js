import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import './LoginRegisterPage.css';

/*
https://unsplash.com/photos/PJzeDJAw3oI
https://unsplash.com/photos/k_j7olQiqAw
https://unsplash.com/photos/8mswK-LU5Vs
*/

const useStyles = makeStyles({
  grid: {
    marginTop: '25px',
    marginBottom: '0px',
    '@media (min-width:960px)': {
      marginTop: '50px',
      marginBottom: '15px',
    },
    '@media (min-width:1280px)': {
      marginTop: '75px',
      marginBottom: '25px',
    }
  }
})

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, san-serif'
  }
});

theme.typography.h1 = {
  fontSize: '2rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
}

const LoginRegister = () => {
  const classes = useStyles();
  return (
    <div>
      <ul className="slideshow">
        <li>
          <span>p1</span>
        </li>
        <li>
          <span>p2</span>
        </li>
        <li>
          <span>p3</span>
        </li>
      </ul>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        className={`${classes.grid} company`}
        style={{ border: "1px solid red" }}>
        <Grid item>
          <h2>img svg</h2>
        </Grid>
        <Grid item>
          <ThemeProvider theme={theme}>
            <Typography variant="h1" className="company-name">MTA Tracker</Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  )
}

export default LoginRegister;