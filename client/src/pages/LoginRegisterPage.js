import { React, useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LogIn from '../components/LogIn';
import Register from '../components/Register';
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
  },
  root: {
    '& label.Mui-focused': {
      color: 'rgb(255,255,255)',
      fontWeight: 'bold'
    },
  },
  inputLabel: {
    fontFamily: 'Montserrat, san-serif',
    color: 'rgb(255,255,255)'
  },
  input: {
    borderRadius: 3,
    backgroundColor: 'rgb(255,255,255)',
    padding: '5px 12px',
    fontSize: '1.5em',
    fontFamily: 'Montserrat, san-serif',
    '@media (min-width:0px)': {
      width: '390px'
    },
    '@media (min-width:600px)': {
      width: '550px'
    },
  },
  link: {
    textDecoration: 'underline', 
    color:'rgb(33,150,243)',
  },
})

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, san-serif'
  }
});

theme.typography.h1 = {
  fontSize: '2.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
}


const LoginRegister = () => {
  const classes = useStyles();

  const [toggleView, setToggleView] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleClick = (e) => {
    e.preventDefault();
    return (toggleView === 0 ? setToggleView(1) : setToggleView(0));
  }

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
        className={`${classes.grid} front`}
      >
        <Grid item>
          <h2>img svg</h2>
        </Grid>
        <Grid item>
          <ThemeProvider theme={theme}>
            <Typography variant="h1" className="company-name">MTA Tracker</Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Container maxWidth="sm" className="front container">
        {toggleView === 0 ? <LogIn onClick={toggleClick} styles= {classes}/> : <Register onClick={toggleClick} styles= {classes}/>}
      </Container>
    </div>
  )
}

export default LoginRegister;