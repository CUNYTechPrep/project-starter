const { sequelize } = require('./models')
const db = require('./models');
const express = require('express');
const cookieParser = require('cookie-parser')
const index = require('./routes/index');
const user = require('./routes/user');
const product = require('./routes/product');
const cors = require('cors')
const auth = require('./auth');
const app = express();
app.use(express.json());
app.use(cookieParser("keyboard_cat"));
const issue2options = {
    origin: "http://localhost:3000",
    methods: ["GET","POST","PATCH","PUT"],
    credentials: true,
    maxAge: 3600
  };
app.use(cors(issue2options));

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