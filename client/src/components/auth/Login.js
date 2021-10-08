import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
	let formDataObject = {
		email: '',
		password: '',
	};

	const [formData, setFormData] = useState(formDataObject);

	const { email, password } = formData;

	const handleFormDataChange = (e) => {
		e.preventDefault();
		setFormData({ ...formData, [e.target.name]: e.target.value });
		console.log(formData);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		console.log('success');
	};

	return (
		<>
			<h1 className="lead text-primary">Log In</h1>
			<p className="lead">
				<FontAwesomeIcon icon={['fas', 'user']} /> Sign Into Your Account
			</p>
			<form className="form" onSubmit={(e) => handleFormSubmit(e)}>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => handleFormDataChange(e)}
						autoComplete="on"
					/>
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
				<input type="submit" className="btn btn-primary" value="Login" />
			</form>
			<p className="my-1">
				Already have an account? <Link to="/signup">Sign In</Link>
			</p>
		</>
	);
};

export default Login;
