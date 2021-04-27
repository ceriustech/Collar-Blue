// Handles getting, creating, and updating user profiles

// Handles creating users

const express = require('express');
const router = express.Router();
// const auth = require('../../middleware/auth');

// @route GET api/profile
// @desc Get all user profiles
// @access Public

router.get('/', (req, res) => res.send('PROFILEs ROUTE!'));

module.exports = router;
