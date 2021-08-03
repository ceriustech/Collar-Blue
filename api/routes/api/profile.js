// Handles getting, creating, and updating user profiles

// Handles creating users

const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/users');
// @route GET api/profile/me
// @desc Get current users profile
// @access Private

router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user: req.user.id,
		}).populate('user', ['name', 'avatar']);
		if (!profile) {
			return res
				.status(400)
				.json({ msg: 'There is no profile for this user.' });
		}
		res.json(profile);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Something went wrong: Server Error');
	}
});

// @route POST api/profile
// @desc Create or update a user profile
// @access Private

router.post(
	'/',
	[
		auth,
		[
			check('status', 'Status is required').not().isEmpty(),
			check('skills', 'Skills is required').not().isEmpty(),
		],
	],
	async (req, res) => {
		// Checking for errors in the body
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// Pull out fields from the body
		const {
			handle,
			company,
			website,
			location,
			status,
			skills,
			bio,
			youtube,
			facebook,
			twitter,
			instagram,
			linkedin,
		} = req.body;

		// Initialize and build profile object
		const profileFields = {};

		// Check to see what's coming into the database
		profileFields.user = req.user.id;
		if (handle) profileFields.handle = handle;
		if (company) profileFields.company = company;
		if (website) profileFields.website = website;
		if (location) profileFields.location = location;
		if (status) profileFields.status = status;
		if (skills) {
			profileFields.skills = skills.split(',').map((skill) => skill.trim());
		}
		console.log(profileFields.skills);
		// res.send('Hello skills');
		if (bio) profileFields.bio = bio;

		// Initialize and build social object
		profileFields.social = {};

		// Check to see what's coming into the database
		if (youtube) profileFields.social.youtube = youtube;
		if (facebook) profileFields.social.facebook = facebook;
		if (twitter) profileFields.social.twitter = twitter;
		if (instagram) profileFields.social.instagram = instagram;
		if (linkedin) profileFields.social.linkedin = linkedin;

		// Searching for profile by the user id
		try {
			let profile = await Profile.findOne({ user: req.user.id });

			// If the profile is found it'll be updated and the profile will be sent back to the database
			if (profile) {
				// Update
				profile = await Profile.findOneAndUpdate(
					{ user: req.user.id },
					{ $set: profileFields },
					{ new: true }
				);

				return res.json(profile); // sends back the profile
			}

			// If the profile is not found it'll be created
			profile = new Profile(profileFields);
			await profile.save();
			res.json(profile); // sends back the profile
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route  update an api/profile
// @desc Update a user profile
// @access Public

router.patch('/:profileId', async (req, res) => {
	try {
		const { profileId } = req.params;
		const data = req.body;

		const profile = await Profile.findByIdAndUpdate(profileId, data);

		if (!profile)
			return res
				.status(404)
				.json({ status: 'fail', message: 'No profile with that id found' });

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send({
			status: 'fail',
			message: err.message,
		});
	}
});

// @route  Get api/profiles
// @desc Get all user profiles
// @access Public

router.get('/', async (req, res) => {
	try {
		const profiles = await Profile.find().populate('user', ['name', 'avatar']);
		res.json(profiles);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route  Get api/profiles/user/:user_id
// @desc Get one user profile by user ID
// @access Public

router.get('/user/:user_id', async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user: req.params.user_id,
		}).populate('user', ['name', 'avatar']);

		if (!profile) return res.status(400).json({ msg: 'Profound not found' });
		res.json(profile);
	} catch (err) {
		console.error(err.message);
		if (err.kind == 'ObjectId') {
			return res.status(400).json({ msg: 'Profile not found' });
		}
		res.status(500).send('Server Error');
	}
});

// router.get(
//   '/user/:user_id',
//   checkObjectId('user_id'),
//   async ({ params: { user_id } }, res) => {
//     try {
//       const profile = await Profile.findOne({
//         user: user_id
//       }).populate('user', ['name', 'avatar']);

//       if (!profile) return res.status(400).json({ msg: 'Profile not found' });

//       return res.json(profile);
//     } catch (err) {
//       console.error(err.message);
// 			if (err.kind == 'ObjectId') {
// 				return res.status(400).json({ msg: 'Profile not found' });
// 			}
//       return res.status(500).json({ msg: 'Server error' });
//     }
//   }
// );

module.exports = router;
