const { sequelize, User, Product, Order } = require('./models')
const db = require('./models');
const express = require('express');
const expressSession = require('express-session');
// const flash = require('connect-flash');
const passport = require('./middlewares/authentication');
const index = require('./routes/index');
const user = require('./routes/user');
const product = require('./routes/product');
const auth = require('./auth');
const cors = require('cors')
const app = express();

app.use(express.json());
// setup passport and session cookies
app.use(expressSession({
    secret: "keyboard_cat",
    resave: false,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());
const issue2options = {
origin: "http://localhost:3000",
methods: ["GET","POST","PATCH","PUT"],
credentials: true,
maxAge: 3600
};
app.use(cors(issue2options));
// app.use(flash())

app.use('/', index);
app.use('/user', user);
app.use('/product', product);
app.use('/auth', auth);

// error handler
app.use(function(err, req, res, next) {
  
    // render the error page
    res.status(err.status || 500);
    return res.json({
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {}
    })
  });

app.listen({port:5000}, async() => {
    console.log('Server up on http://localhost:5000');
    await sequelize.authenticate();
    console.log("Database connected")
})