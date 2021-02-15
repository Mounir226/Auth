const express = require('express');
const router = express.Router();  // Capital R

router.get('/', (req,res) => res.send('Welcome'));

module.exports = router;

// You should app.use this route in your app JS as well 