const db = require('../models');
const { Product } = db;

module.exports = {
  postProduct(req,res){
    console.log("POST body: ", req.body);
    const {productName, price, amount, description, sellerID, category} = req.body;
    Product.create({
      productName, 
      price, 
      amount, 
      description, 
      sellerID, 
      category,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then((product) => {
        res.status(200).json(product);
      })
      .catch((err) => {
        res.status(400).json({ msg: 'Failed to submit product', err });
      });
  }
}