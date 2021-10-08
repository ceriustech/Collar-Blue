import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Signup = () => {
	let formDataObject = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const [formData, setFormData] = useState(formDataObject);

	const { name, email, password, confirmPassword } = formData;

	const handleFormDataChange = (e) => {
		e.preventDefault();
		setFormData({ ...formData, [e.target.name]: e.target.value });
		console.log(formData);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			console.log('passwords do not match');
		} else {
			console.log('success');
		}
	};

	return (
		<>
			<h1 className="lead text-primary">Sign Up</h1>
			<p className="lead">
				<FontAwesomeIcon icon={['fas', 'user']} /> Create Your Account
			</p>
			<form className="form" onSubmit={(e) => handleFormSubmit(e)}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={name}
						onChange={(e) => handleFormDataChange(e)}
						autoComplete="on"
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => handleFormDataChange(e)}
						autoComplete="on"
					/>
					<small className="form-text">
						This site uses Gravatar so if you want a profile image, use a
						Gravatar email
					</small>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={password}
						onChange={(e) => handleFormDataChange(e)}
						minLength="6"
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Confirm Password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={(e) => handleFormDataChange(e)}
						minLength="6"
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
			<p className="my-1">
				Already have an account? <Link to="/login">Log In</Link>
			</p>
		</>
	);
};

export default Signup;
