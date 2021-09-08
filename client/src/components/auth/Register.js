import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Register = () => {
	let formDataObject = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const [formData, setFormData] = useState(formDataObject);

	const { name, eamil, password, confirmPassword } = formData;
	return (
		<>
			<h1 className="large text-primary">Sign Up</h1>
			<p className="lead">
				<FontAwesomeIcon icon={['fas', 'user']} /> Create Your Account
			</p>
			<form className="form" action="create-profile.html">
				<div className="form-group">
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={name}
						required
					/>
				</div>
				<div className="form-group">
					<input type="email" placeholder="Email Address" name="email" />
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
						minLength="6"
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Confirm Password"
						name="password2"
						minLength="6"
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
			<p className="my-1">
				Already have an account? <a href="login.html">Sign In</a>
			</p>
		</>
	);
};

export default Register;
