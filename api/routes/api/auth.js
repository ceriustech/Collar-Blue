// Handles getting JWT for authentication

// Handles creating auth

const express = require('express');
const router = express.Router();

// @route GET api/posts
// @desc Test route
// @access Public

router.get('/', (req, res) => res.send('AUTH ROUTE!'));

module.exports = router;
