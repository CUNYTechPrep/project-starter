//api folder handles the backend

const express = require('express'); //load in library from node modules
const morgan = require('morgan'); //load in library from node modules
const path = require('path'); //load in library from node modules
const db = require('./models'); //load in my own code, the entire models folder to handle DB stuff
const app = express();
const PORT = process.env.PORT;

//setting up our application
// this lets us parse 'application/json' content in http requests
app.use(express.json());

// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
app.use(morgan(logFormat)); //set up morgan to output to the terminal

// this mounts controllers/index.js at the route `/api`
app.use('/api', require('./controllers')); //loads all of our controllers and make them available at the url that starts with /api
//wheh mounting controllers, it will look for index.js first

// for production use, we serve the static react build folder
// for deploying to heroku
// development environment - will display full debug information
// production environment - will NOT display any debug information
if(process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // all unknown routes should be handed to our react app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

//Initializing our DB
// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
db.sequelize.sync({ force: false });

// start up the server
if(PORT) {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} else {
  console.log("===== ERROR ====\nCREATE A .env FILE!\n===== /ERROR ====")
}
