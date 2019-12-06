const router = require('express').Router();
const { Recipes, Items_Recipes, Items  } = require('../models');

// This may be tricky depending on how we are handling recipes.

// @route POST
// @body {
//     name: {Type: String},
//     instructions: {Type: String}
//     ingredients: {Type: some Associative Array} // "Item Name/Id": "Quantity needed"
// }
// @desc  Inserts a new Recipe
router.post('/create'), (req, res) => {

    // From the edamam api, things we will take
    // "ingredientLines"
    // Presents an intereststing problem. Ingredients are delivered in forms like
    // "1/2 cup olive oil", "5 cloves garlic, peeled", "2 large russet potatoes, peeled and cut into chunks"
    // Basically we would have to create some kind of condition table and expand the recipe item table
    // Also we would have to parse the hell out of these ingredients to properly determine what theyre talking about.
    // At the very least we could determine what exact ingredients they are, and may be the quantity.
    // Once again, alot of parsing. State could be reflected in the instructions? 
    /* Ideally we could collect the recipe source too */

    // Ensure we have an entry for each required item in the recipe, in the Item table
    // do usual checks ("duplicates or whatever")
    // Insert new entry (name and instruction block), get id
    // THEN
    // Start making insertions into the Items_Recipes table as such
     
    for(item in ingredients) {
        // Insert
        const newItem = {
            "recipe_id": recipe_id,
            "item_id": item_id,
            "qty": qty
        }
    }

    // Return success or fail
}


// @route GET
// @body {
//     id: {Type: Integer},
// }
// @desc  Pulls the details of a single recipe
router.get('/recipe'), (req, res) => {
    
    Recipes.findByPk(req.body.id)
    .then(recipe => {
        res.status(200).json({recipe: recipe})
    })
    .catch(err => {
        console.log(err)
        res.status(404)
    });
    

}

// @route DELETE
// @body {
//     id: {Type: Integer},
// }
// @desc  Removes a recipe given the recipe's id
router.delete('/remove'), (req, res) => {
    // some query to delete the recipe

    // Return success/fail
}

module.exports = router; 