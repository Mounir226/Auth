const express = require('express');
const router = express.Router();  // Capital R

//Login Page
router.get('/login', (req,res) => res.send('Login'));

//Register Page
router.get('/register', (req,res) => res.send('Register'));

module.exports = router;

// You should app.use this route in your app JS as well``
// Gives you access to localhost:5000/users/login & .../register  