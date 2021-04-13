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
  disabled: {
    pointerEvents: 'none',
  }
})

const LogIn = ({ onClick, styles }) => {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Register</h2>
      <form>
        <FormControl margin="normal" className={styles.root}>
          <InputLabel required shrink htmlFor="username" className={styles.inputLabel}>Username</InputLabel>
          <Input required disableUnderline id="username" className={styles.input} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>

        <FormControl margin="normal" className={styles.root}>
          <InputLabel required shrink htmlFor="email" inputProps={{ type: 'email' }} className={styles.inputLabel}>Email</InputLabel>
          <Input required disableUnderline id="email" className={styles.input} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>

        <FormControl margin="normal" className={styles.root}>
          <InputLabel required shrink htmlFor="password" className={styles.inputLabel}>Password</InputLabel>
          <Input required disableUnderline id="password" type="password" inputProps={{ minLength: 6 }} className={styles.input} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>

        <FormControl margin="normal" className={styles.root}>
          <InputLabel required shrink htmlFor="re-enter-password" className={styles.inputLabel}>Re-enter Password</InputLabel>
          <Input required disableUnderline id="re-enter-password" type="password" inputProps={{ minLength: 6 }} className={styles.input} onChange={(e) => setReEnterPassword(e.target.value)} />
        </FormControl>

        <h3>Have an Account? <a href="#" onClick={onClick} className={styles.link}>Log In!</a></h3>
        {password === reEnterPassword ?
          <Button size="large" fullWidth="true" variant="contained" color="primary" onClick={handleClick} className={classes.button}>
            Register
        </Button> :
          <Button size="large" fullWidth="true" variant="contained" color="default" className={`${classes.button} + ${classes.disabled}`}>
            Register
        </Button>
        }
      </form>

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

      <h3 className={styles.margin}>This is a non-profit website and all intellectual property is owned by MTA.</h3>

    </div>
  )
}

export default LogIn;