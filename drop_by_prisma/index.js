const express = require('express')
const app = express();
app.use(express.json());
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
    Creat user
    Get a list of all users
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