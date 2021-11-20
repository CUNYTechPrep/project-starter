const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { User } = require('../models');

function passwordsMatch(submittedPassword, storedPasswordHash) {
  return bcrypt.compareSync(submittedPassword, storedPasswordHash);
}

/*
  The following code runs at login time.
  The usernameField and passwordField options refer to the HTTP requests
  body parameter names. I've set this to look for an `email` parameter,
  but you may prefer to use a `username` parameter instead of an email.
  BEST PRACTICE: don't state why login failed to the user.
*/
function passwordsMatch(submittedPassword, storedPasswordHash) {
  return bcrypt.compareSync(submittedPassword, storedPasswordHash);
}
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  (email, password, done) => {
    User.findOne({ where: { email } })
      .then((user) => {
        if(!user) {
          console.log('\n\nFailed Login: user does not exist\n\n');
          return done(null, false, { message: 'User does not exist' });
        }

        if(passwordsMatch(password, user.password) === false) {
          return done(null, false, { message: 'Passwords did not match' });
        }
        return done(null, user, { message: 'Successfully Logged In!' });
      })
      .catch(err => { return done(err) });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser((user_id, done) => {
  User.findByPk(user_id)
    .then((user) => {
      if (!user) {
        done(null, false);
        return;
      }

      done(null, user);
      return;
    })
    .catch(err => done(err, null));
});

passport.isAuthenticated = () =>
  (req, res, next) => (req.user ? next() : res.sendStatus(401));

module.exports = passport;