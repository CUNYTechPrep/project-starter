const express = require('express');
const router = express.Router();


// Load each controller
const authController = require('./auth');
const otherController = require('./other');

const itemsController = require('./items');
const usersController = require('./users');
const recipesController = require('./recipes');

const postsController = require('./posts.js');
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', authController);
router.use('/other', otherController);
router.use('/items', itemsController);
router.use('/users', usersController);
router.use('/recipes', recipesController);
router.use('/posts', postsController);
router.use('/application-configuration', appConfigController);


module.exports = router;

const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const client = require('twilio')(
  process.env.TWILIO_ACCOUT_SID,
  process.env.TWILIO_AUTH_TOKEN
);


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());	
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.post('/api/messages', (req, res) => {
	  res.header('Content-Type', 'application/json');
	  client.messages
	  	.create({
      		from: process.env.TWILIO_PHONE_NUMBER,
      		to: req.body.to,
      		body: req.body.body
    	})
    	.then(() => {
      		res.send(JSON.stringify({ success: true }));
    	})
    	.catch(err => {
      		console.log(err);
      	res.send(JSON.stringify({ success: false }));
    });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);