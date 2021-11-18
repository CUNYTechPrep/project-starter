const router = require("express").Router();
const {PrismaClient} = require('@prisma/client');
const { PrismaClientRustPanicError } = require("@prisma/client/runtime");
const {user} = new PrismaClient();
let bcrypt = require('bcrypt');
const { json } = require("express");
const bcypt_num = 8; 
// // Get list of users
router.get('/', async(req,res)=>{
  try{
    const users = await user.findMany();
    return res.json(users);
  }catch(err){
    console.log(err);
    return res.status(500).json(err);
  }
});
router.get('/:user_id', async(req,res)=>{
    const username = req.params.user_id || '', user_id = req.params.user_id || '';
    try{
      const users = await user.findFirst({
          where: {
              OR: [
                  {user_id:user_id},
                  {username:username}
              ],
          }
      });
      if(!users) return res.json({'msg':'Enter a valid username or user ID.'})
      return res.json(users);
    }catch(err){
      console.log(err);
      return res.status(500).json(err);
    }
  });
// password needs to be hashed via bcrypt
router.post('/', async(req,res) =>{
    let {username,password,first_name,last_name,
        email, phone_number, birth_date,
        address, city, state, country, zip,
        is_vaccinated, is_verifed} = req.body;
    const itemExists= await function(item){
        let res = user.findUnique({
            where:{
                [item.prop]:item.value
            }
        });
        return res;
    }
    let checkFor = [{'prop':'username','value':username},
                    {'prop':'email','value':email},
                    {'prop':'phone_number','value':phone_number}];
    for(let field of checkFor){
        if(await itemExists(field)){
            return res.status(400).json({
                'msg': `${field.value}: is already taken/used`
            });
        }
    }

    password = bcrypt.hashSync(password,bcypt_num);
    // let age = Math.floor((Date.now()-birth_date)* 0.0001);
    /*
    We can add age later on, issue with age is that
    we'll have to update their ages on each new day.
    */
    const createUser = await user.create({
        data:{
            username,
            password,
            first_name,
            last_name,
            email,
            phone_number,
            birth_date,
            // age,
            address,
            city,
            state,
            country,
            zip,
            is_vaccinated,
            is_verifed
        }
    })
    res.json(createUser);
});
// verify a vaccination status
router.patch('/:username/vaccinated', (res,req)=>{
    const {username} = req.body;
    try{
        const updateUserInfo = await user.update({
            where:{
                username
            },
            update:{
                is_vaccinated: true
            }
        });
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});
// verify a user
router.patch('/:username/verifed', (res,req)=>{
    const {username} = req.body;
    try{
        const updateUserInfo = await user.update({
            where:{
                username
            },
            update:{
                is_verifed: true
            }
        })
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});
router.patch('/edit', (res,req)=>{
    const {user_id,first_name,last_name,email,phone_number,birth_date,address,city,state,country,zip} = req.body;
    try{
        const updateUserInfo = await user.update({
            where:{
                user_id
            },
            update:{
                first_name:first_name,
                last_name:last_name,
                email:email,
                phone_number:phone_number,
                birth_date:birth_date,
                address:address,
                city:city,
                state:state,
                country:country,
                zip:zip,
                updatedAt:Date.now()
            }
        });
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});
router.patch('/verifed', (res,req)=>{
});
module.exports = router;