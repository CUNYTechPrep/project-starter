/*
Needs to keep username as primary ID
Check for Address, convert Address into geolocation
*/
const Op = require('Sequelize').Op;
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
/* PUT IN DOTENV LATER*/
const geolocation_key = 'f05f8024f168401db57b473aadf247cb';
/* PUT IN DOTENV LATER*/

const { sequelize, User, Event, Participant } = require('./models');
const express = require('express')
const req_method = {method:'GET'};
const app = express();
app.use(express.json());
// creation of a user
app.post('/users', async(req,res) =>{
    const { username,first_name,last_name,
        email, phone_number, birth_date,
        address, city, state, country, zip,
        is_vaccinated, is_verifed } = req.body
    try {
      const user = await User.create({ username,first_name,last_name,
        email, phone_number, birth_date,
        address, city, state, country, zip,
        is_vaccinated, is_verifed })
      return res.json(user)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
});
// Get list of users
app.get('/users', async(req,res)=>{
  try{
    const users = await User.findAll();
    return res.json(users);
  }catch(err){
    console.log(err);
    return res.status(500).json(err);
  }
});
// Get user detail by username or user_id
app.get('/users/:username', async(req,res) =>{
  const username = req.params.username, user_id = req.params.username;
  try {
    const user_data = await User.findOne({where: {username}}) || await User.findOne({where: {user_id}})
    return res.json(user_data)
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
});
// Create event - need to ensure that event time/date is greater than the current time/date
app.post('/host_event', async(req,res)=>{
  let { event_id,user_id,event_title,event_desc,online_event,capacity, taken, event_address, event_city, event_state, event_country, event_zip,
    event_long, event_lat, event_start, event_end, event_image, event_past, require_vac} = req.body
  try{
    let query = [`https://api.geoapify.com/v1/geocode/search?text=`];
    let verify = [event_address,event_city,event_state,event_country,event_zip];
    while(verify.length){
      const curr = verify.pop(); 
      if(curr) query.push(curr.replace(/\s+/g,'%20'),'%20');
    }
    query.pop(); // removes the final '%20'
    query.push('&apiKey=');
    query.push(geolocation_key);
    query = query.join('');
    if(query!==''){
      await fetch(query, req_method).then(res => res.json()).then(res=>{
        event_long = res.features[0].properties.lon;
        event_lat = res.features[0].properties.lat;
      })
    }
    const posts = await Event.create({event_id,user_id,event_title,event_desc,online_event,capacity, taken,event_address, event_city, event_state, event_country, event_zip,
      event_long, event_lat, event_start, event_end, event_image, event_past, require_vac});
    return res.json(posts);
  }catch(err){
    console.log(err);
    return res.status(500).json(err);
  };
});
// Get all events that is not expired
app.get('/active_events', async(req,res)=>{
  try{
    const events = await Event.findAll({
      where:{
        event_end:{
            [Op.gt]: Date.now()
        }
      }
    });
    return res.json(events);
  }catch(err){
    console.log(err);
    return res.status(500).json(err);
  }
});
// Get events hosted by the individual
app.get('/host/:username', async(req,res) =>{
  const username = req.params.username
  try {
    const user_data = await Event.findAll({where: {username}});
    return res.json(user_data)
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
// User registered for event. 
app.post('/register', async(req,res) =>{
  const {user_id,event_id, accommodations} = req.body;
  try{
    // Checks that the event is not expired before registering the user.
    const partipant_id = `${user_id}_${event_id}`;
    const events = await Event.findOne({where:{event_id}});
    if (events.event_end < Date.now()){
      throw new Error('Event has ended already');
    }
    const registeration = await Participant.create({partipant_id,user_id,event_id,accommodations});
    return res.json(registeration);
  }catch (err){
    console.log(err);
    return res.status(500).json(err);
  }
});
// unregister for a event
app.delete('/register', async(req,res) =>{
  let {user_id,event_id, partipant_id} = req.body;
  try{
    if(!partipant_id) partipant_id = `${user_id}_${event_id}`;
    else if(!(event_id && user_id) && partipant_id){
      user_id,event_id = partipant_id.split('_');
    }
  }catch(err){
    console.log('Missing partipant_id or event_id and user_id')
    return res.status(500).json(err);
  }
  try{
    // Cannot unregister for past events
    const events = await Event.findOne({where:{event_id}});
    if (events.event_end < Date.now()){
      throw new Error('Event has ended already');
    }
    const unregister = await Participant.destroy({where:{
      partipant_id:{
        [Op.eq]:partipant_id
      }
    }});
    return res.text("Deleted");
  }catch (err){
    console.log(err);
    return res.status(500).json(err);
  }
});
app.listen({ port: 8000 }, async () => {
  console.log('Server up on http://localhost:8000')
  await sequelize.authenticate();
  // await sequelize.sync({force:true}); // force restart
  console.log('Connected!')
});