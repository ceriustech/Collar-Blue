import React from 'react';

const Landing = () => {
	return (
		<section className="landing">
			<div className="landing-container">
				<div className="landing-inner">
					<h1 className="x-large logo">
						Collar
						<span>Blue</span>
					</h1>
					<p className="lead">
						Create a profile/portfolio, share posts and trade work with other
						skilled tradesmen
					</p>
					<div className="buttons">
						<a href="register.html" className="btn btn-primary">
							Sign Up
						</a>
						<a href="login.html" className="btn btn-light">
							Login
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
