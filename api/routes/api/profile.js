// Handles getting, creating, and updating user profiles

// Handles creating users

const express = require('express');
const router = express.Router();

// @route GET api/profile
// @desc Test route
// @access Public

router.get('/', (req, res) => res.send('PROFILE ROUTE!'));

module.exports = router;
