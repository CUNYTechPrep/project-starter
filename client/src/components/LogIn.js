import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles({
  button: {
    marginBottom: '20px',
    fontSize: '1.25rem',
    fontFamily: "Montserrat, san-serif"
  },
})

const LogIn = ({ onClick, styles }) => {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleClick = (e) =>{
    e.preventDefault();
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);

    history.push("/home");
  }

  return (
    <div>
      <h2 style={{textAlign: 'center', fontSize: '2rem'}}>Log In</h2>
      <div>
        <FormControl margin="normal" className={styles.root}>
          <InputLabel required shrink htmlFor="username" className={styles.inputLabel}>Username</InputLabel>
          <Input required disableUnderline id="username" className={styles.input} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>

        <FormControl margin="normal" className={styles.root}>
          <InputLabel required shrink htmlFor="password" margin="dense" className={styles.inputLabel}>Password</InputLabel>
          <Input required disableUnderline id="password" type="password" className={styles.input} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
      </div>
      <h3>Don't have an Account? <a href="#" className={styles.link} onClick= {onClick}>Register Here!</a></h3>
      <Button size="large" fullWidth={true} variant="contained" color="primary" onClick= {handleClick} className={classes.button}>
        Log In
      </Button>
      
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center">
          <Grid item>
            <Link to="/about" className={styles.link} style={{padding: "10px"}}>About Us</Link>
          </Grid>
          <Grid item>
            <Link to="#" className={styles.link} style={{borderLeft: "1px solid white", padding: "10px"}}>Terms of Use</Link>
          </Grid>
      </Grid>

      <h3>This is a non-profit website and all intellectual property is owned by MTA.</h3>
    </div>
  )
}

export default LogIn;