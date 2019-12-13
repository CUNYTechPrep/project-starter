const db = require('./models');
const accountSid = 'AC8f6280567821be8b29f921d80cf154db';
const authToken = 'a919c151b6d4c8a4148225db6ac0e3a9';
const client = require('twilio')(accountSid, authToken);
const from = "+17162433764"

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;
var to;
var body;

//setInterval(textEachDay(), 1);




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

db.sequelize.query(`SELECT * FROM users as u inner join users_items as ui on ui."userId" = u.id inner join items as i on i.id = ui."itemId" where ui.expiration <= '${today}' order by ui."userId"`).then(users => {
    let itemtext=" ";
    var i = 0;
    users.map(user => {

        user.forEach(u => {
            
            itemtext = u.itemname+","+itemtext;

            if(u.id != u[i+1].id){

                to = u.phonenumber;
                body = "Hi Dear "+u.username+". Your"+itemtext+" has expired";
                runText(from, to, body);
                itemtext = " ";
            }
            i++;
            
            

        })
    })



})

/*
function textEachDay(){
    db.sequelize.query(`SELECT * FROM users as u inner join users_items as ui on ui."userId" = u.id inner join items as i on i.id = ui."itemId" where ui.expiration <= '${today}' order by ui."userId"`).then(users => {
        let itemtext = ",";
        users.map(user => {

            user.forEach(u => {
                
                itemtext = itemtext + u.itemname;

                if(u.id != u[i+1].id){

                    to = u.phonenumber;
                    body = "Hi Dear "+u.username+". Your"+itemtext+" has expired";
                    runText(from, to, body);
                    itemtext = ",";
                }
                i++;
                
                
    
            })
        })
    
    
    
    })
}
*/









