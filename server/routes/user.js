const express = require('express');
const router = express.Router();
const { User } = require('../models')
const passport = require('../middlewares/authentication')
const bcrypt = require('bcrypt');
//since we hava not created the admin, no one should be allowed to access this endpoints
//only admin can create a account mannually
router.get('/' ,async(req, res) => {
    try{
        const users = await User.findAll();
        return res.json(users);
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

//authenticated user can have access to its account
router.get('/:uuid',passport.isAuthenticated(), async(req, res) => {
    const {uuid} = req.params;
    try{
        const user = await User.findOne({
            where: {user_id:uuid}
        });
        return res.json(user);
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})
//only admin can delete the account
router.delete('/:uuid', passport.isAuthenticated(),async(req, res) => {
    const { uuid } = req.params;
    try{
        const user = await User.findOne({where: {user_id:uuid}});

        await user.destroy();
        return res.json('User deleted!')
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
})


//authenticated user can change its password
// did not work, dont know why!!!! ask
router.patch('/:uuid', passport.isAuthenticated() ,async(req, res) => {
    const { uuid } = req.params;
    const { password } = req.body;
    try{
        const user = await User.findOne({where: {user_id:uuid}});
        if(password){
            bcrypt.hash(password, 10).then(function(hash) {
                // Store hash in your password DB.
                user.password = hash;
            });
        }
        await user.save();
        return res.json(user);
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
})

module.exports = router;