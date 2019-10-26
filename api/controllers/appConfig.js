const express = require('express');
const router = express.Router();

router.get('/', (res, req) => {
  res.json({
    title: 'APP TITLE',
    description: 'A short description about this app',
  });
});


module.exports = router;