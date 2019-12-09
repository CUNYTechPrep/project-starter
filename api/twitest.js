const db = require('./models');
const { Users } = db;
const { Users_Items } = db;
const { Items } = db;
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);
const from = "+17162433764"

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;
var to;
var body;



function runText(from, to, body) {
    client.messages
        .create({
            body: body,
            from: from,
            to: to
        })
        .then(message => console.log(message.sid))
        .catch(err => console.log(err));
}


// postgres any uppercase add "userId"

db.sequelize.query(`SELECT * FROM users as u inner join users_items as ui on ui."userId" = u.id inner join items as i on i.id = ui."itemId" where ui.expiration <= '${today}'`).then(users => {

    users.map(user => {
        user.forEach(u => {
            to = u.phonenumber;
            body = "Hi! Dear " + u.username + ". Your "+ u.itemname + " has expired!";
            runText(from,to,body);
            
        })
    })
    
    

})









