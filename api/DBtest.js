const db = require('./models');
const { Users } = db;
const { Users_Items } = db;
const { Items } = db;


const p1 = Users.create({
    username: "steven",
    password: "St123456",
    email: "st@gmail.com",
    phonenumber: "+17188130781",
    auth_token: "233333"

})

const p2 = Items.create({
    itemname: "milk"
})


Promise.all([p1, p2])
.then(res => {
    Items.findByPk(1)
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







