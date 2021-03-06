// Handles getting JWT for user authentication
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/users');

// @route GET api/posts
// @desc Test route
// @access Public

router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route POST api/auth
// @desc Authenticate User and get JSON web token
// @access Public

router.post(
	'/',
	[
		check('email', 'Please include a valid email.').isEmail(),
		check('password', 'Password is required.').exists(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		const token = req.header('x-auth-token');

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			// Check if user exists
			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'Invalid user credentials.' }] });
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'Invalid user credentials.' }] });
			}

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{ expiresIn: 360000 },
				(err, token) => {
					if (err) {
						throw err;
					} else {
						res.send({ token });
					}
				}
			);

			// Return json web token
		} catch (err) {
			console.log(err.message);
			res.status(500).send('Server Error!');
		}
	}
);

module.exports = router;
