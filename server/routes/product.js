const express = require('express');
const router = express.Router();
const { Product } = require('../models')

//only admin can create a new product
router.post('/new', async (req, res) => {
    const { name, price, description, imageLink, shelf, color } = req.body;
    try {
        const product = await Product.create({name, price, description, imageLink, shelf, color});
        return res.json(product);
    }catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})
//anyone can access the product lists
router.get('/', async (req, res) => {
    try{
        const products = await Product.findAll();
        return res.json(products)
    }catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// anyone can access the specified product
router.get('/:product_id', async (req, res) => {
    const { product_id } = req.params;
    try{
        const product = await Product.findOne({
            where: { product_id}
        })
        return res.json(product)
    }catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})
//only admin can change the product info
router.patch('/:product_id', async (req, res) => {
    const { product_id } = req.params;
    const { name, price, description, imageLink, shelf, color } = req.body;
    try{
        const product = await Product.findOne({where: {product_id}});
        if(name){
            product.name = name;
        }
        if(price){
            product.price = price;
        }
        if(description){
            product.description = description;
        }
        if(imageLink){
            product.imageLink = imageLink;
        }
        if(shelf){
            product.shelf = shelf;
        }
        if(color){
            product.color = color;
        }

        await product.save();

        return res.json(product)
    }catch(e){
        console.log(e);
        return res.status(500).json(e)
    }
})
// only admin can delete product
router.delete('/:product_id', async(req, res) => {
    const { product_id } = req.params;
    try{
        const product = await Product.findOne({where: {product_id}});

        await product.destroy();
        return res.json("Product deleted!")
    }catch(e){
        console.log(e);
        return res.status(500).json(e)
    }
})

module.exports = router;