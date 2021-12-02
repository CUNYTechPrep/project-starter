const express = require('express');
const session = require('express-session'); // npm install express-session

const app = express();
app.use(express.json());
app.set('trust proxy', 1);
app.use(session({
    secret: 'drop_by',
    resave: false,
    saveUninitialized: true,
}));
app.use('/users', require('./routes/Users'));
app.use('/event', require('./routes/Events'))
app.use('/participant', require('./routes/Participants'))

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})

app.listen({ port: 8000 }, async () => {
    console.log('Server up on http://localhost:8000')
    console.log('Connected!')
});
/*
Users
- users/
    Get a list of all users
- users/sign_up
    Create user
- user/login
    Validates user creds and grabs infomation if correct
- user/logout
    logs the user out
- users/:user_id
    Get individual user info
- user/:username/vaccinated
    User's vaccination status becomes true
- user/:username/verifed
    User's verification status becomes true
- username/edit
    User sends edit request for their profile
- user/:username/event
    Display all events that the user is registered for
- user/:username/event/past
    Display all events that the user is registered for that's end date has past
- user/:username/event/active
    Display all events that the user is registered for that's end date has not past yet
Events
- event/
    Create Event
    Get a list of all events
- event/active
    Get a list of active(have not occurred) events
- event/past
    Get a list of all past events
- event/:event_id/partipants
    Get a list of all partipants of an event 
Participants
- participant/
    Create an registeration for an event
    Get a list of all registeration (not really useful)
    Delete an existing registeration for an event
*/