const express = require('express');
const router = express.Router();
const { loginAccount } = require('../auth');

router.post('/', async (req,res) => {
  try {
    const { body } = req;
    const { username, password } = body;
    const response = await loginAccount(username, password );
    console.log(response);
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ "error" : err.message });
  }
})
module.exports = router;