const db = require('./models');
const { Users } = db;
const { Users_Items } = db;
const { Items } = db;
/*
Users.create({
    username: "rayay",
    password: "St123456",
    email: "ray@gmail.com",
    phonenumber: "+19294618428", 
    auth_token: "6666666666"

}).catch(err=>{
    console.log(err);
})
*/

/*
Items.create({
    itemname: "bread"
})
*/



Items.findByPk(1)
    .then(item =>  {
        console.log('item', item);
        Users.findByPk(7).then( user => {
            console.log('user', user)
            user.addItem(item, { through: {qty: 1, expiration: new Date('11-11-2019')}});
        })
    })


/*
Promise.all([p2])
.then(res => {
    Items.findByPk(2)
    .then(item =>  {
        console.log('item', item);
        Users.findByPk(1).then( user => {
            console.log('user', user)
            user.addItem(item, { through: {qty: 1, expiration: new Date('11-11-2019')}});
        })
    })
})
.catch(err =>{
    console.log(err);
})
*/







