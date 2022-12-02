const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { User } = require('../models');

function passwordsMatch(submittedPassword, storedPasswordHash) {
    return bcrypt.compareSync(submittedPassword, storedPasswordHash);
}

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
},
(email, password, done) => {
    User.findOne({ where: {email} })
    .then((user) => {
        if(!user) {
            console.log('\n\nFailed Login: user does not exist\n\n');
            return done(null, false, {message: 'Failed Login' });
        }

        if(passwordsMatch(password, user.passwordHash) === false) {
            console.log('\n\nFailed Login: passwords does not exist\n\n');
            return done(null, false, {message: 'Failed Login' });        
        };
        console.log('\n\nSuccessful Login\n\n');
        return done(null, user, { message: 'Successfully Logged In!'});
        
    })
    .catch(err => {return done(err)});
})
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((user, done) => {
    User.findByPk(id)
    .then((user) => {
        if(!user) {
            done(null, false);
            return;
        }
        done(null, user);
        return;
    })
})

module.exports = passport;

