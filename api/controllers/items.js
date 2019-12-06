const router = require('express').Router();
const { User_Items, Items, Users } = require('../models');

/* This may very well regard UserItems, not Items. Items is a reference table, UserItems is that fluid stuff. */

// @route POST
// @body {
//     user_id: {Type: Integer},
//     item_name: {Type: String }, OR
//     item_id: {Type: Integer},
//     quantity: {Type: Number},
//     expr_date: {Type: String? }
// }
// @desc  Creates a UserItem based upon supplied info
router.post('/items'), (req, res) => {
    
    console.log("Item POST: " + req.body.item_name)

    // Ensure User Exists
    Users.findByPk(req.body.user_id)
    .then(user => {
        Items.findByPk(req.body.item_id)
        .then(item => {
            if(!item) {
                // make new entry using name
            } 

            User_Items.create({
                user_id: user.id,
                item_id: item.id,
                qty: req.body.qty,
                expiration: req.body.expr_date
            })
        })
    })
    .then(r => {
        res.status(201).json({msg: "Item successfully added"})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({msg: err})
    });

   // CONSIDER RETURNING ALL OF THE USER'S ITEMS

}

// @route GET
// @body {
//     user_id: {Type: Integer},
// }
// @desc  Pulls all of a user's items
router.get('/items/:u_id'), (req, res) => {
    console.log("Item GET")
    const { u_id } = req.params;
    // get all items belonging to a certain user id
    User_Items.findAll({ where: {user_id: u_id}})
    .then(items => {
        let found_items = []

        res.status(200).json({items: items})
    })
    .catch(err => {
        // If it fails, hopefully at worst it will just return an empty array or something of the sort
        console.log(err)
        res.status(400).json({err: err})
    });
}


// @route PATCH
// @body {
//     id: {Type: Integer} The user_item's id, NOT the user id or item id,
//     qty: {Type: Double},
//     expr_date: {Type: Date}
// }
// @desc  Updates an existing user item based upon changed values
router.patch('/items'), (req, res) => {
    console.log("Item PATCH: " + req.body.id)
    // Note. In this case the item_id, and user ID
    // And that either a qty will be updated (through usage explicitely) or if the user
    // changes the expiration date.
    User_Items.update(
        { qty: req.body.qty, expiration: req.body.expr_date },
        { where:  {id: req.body.id }}
    )
    .then(r => {
        res.status(200)
    })
    .catch(err => {
        res.status(400)
    })
}

// @route DELETE
// @body {
//     id: {Type: Integer},
// }
// @desc  Removes a given user item based upon usage (depletion), or expiration
router.delete('/items:id'), (req, res) => {
    console.log("Item DELETE")
    const { id } = req.params;

    User_Items.destroy({
        where: { id: id }
    })
    .then(r => {
        res.status(204)
    })
    .catch(err => {
        res.status(404)
    })

}


module.exports = router; 