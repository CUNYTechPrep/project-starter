const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models').User;


function passwordsMatch(submittedPassword, storedPasswordHash) {
  return bcrypt.compareSync(submittedPassword, storedPasswordHash);
}


passport.use(new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'password',
  },
  (userName, password, done) => {
    User.findByPk(userName)
      .then((user) => {
        if(!user) {
          console.log('\n\nFailed Login: user does not exist\n\n');
          return done(null, false, { message: 'Failed Login' });
        }

        if(passwordsMatch(password, user.passwordHash) === false) {
          console.log('\n\nFailed Login: passwords did not match\n\n');
          return done(null, false, { message: 'Failed Login' });
        }

        console.log('\n\nSuccessful Login\n\n');
        return done(null, user, { message: 'Successfully Logged In!' });
      })
      .catch(err => { return done(err) });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.userName);
});

passport.deserializeUser((userName, done) => {
  User.findByPk(userName)
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

// passport.redirectIfLoggedIn = (route) =>
//   (req, res, next) => (req.user ? res.redirect(route) : next());

// passport.redirectIfNotLoggedIn = (route) =>
//   (req, res, next) => (req.user ? next() : res.redirect(route));

passport.isAuthenticated = () => 
  (req, res, next) => (req.user ? next() : res.sendStatus(401));


module.exports = passport;