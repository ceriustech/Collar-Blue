// Handles creating users
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/users');

// @route POST api/users
// @desc Register User route
// @access Public

router.post(
	'/',
	[
		check('name', 'Name is required.').not().isEmpty(),
		check('email', 'Please include a valid email.').isEmail(),
		check(
			'password',
			'Please enter a password with six or more characters.'
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			// Check if user exists
			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'User already exists' }] });
			}

			// Get users gravatar
			const avatar = gravatar.url(email, {
				s: '200',
				r: 'pg',
				d: 'mm',
			});

			user = new User({
				name,
				email,
				avatar,
				password,
			});

			// Encrypt password
			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

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
						res.json({ token });
					}
				}
			);

			// Return json web token
		} catch (err) {
			console.log(err.message);
			res.status(500).send('Server Error!');
		}

		console.log(req.body);
		res.send({ token });
	}
);

module.exports = router;
