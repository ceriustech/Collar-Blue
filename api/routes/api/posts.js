// Handles adding, updating, and removing posts.

// Handles creating users

const express = require('express');
const router = express.Router();

// @route GET api/posts
// @desc Test route
// @access Public

router.get('/', (req, res) => res.send('POSTS ROUTE!'));

module.exports = router;
