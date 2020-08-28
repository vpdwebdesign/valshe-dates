import React from 'react';

import * as ROUTE from 'constants/routes';
import logo from '../../../static/logo_vertical_cropped.png';

const Footer = ({ path }) => {
	// hide the footer to these routes
	const hiddenPaths = [
		ROUTE.SIGNIN,
		ROUTE.SIGNUP,
		ROUTE.FORGOT_PASSWORD,
		ROUTE.ACCOUNT,
		ROUTE.ACCOUNT_EDIT,
		ROUTE.CHECKOUT_STEP_1,
		ROUTE.CHECKOUT_STEP_2,
		ROUTE.CHECKOUT_STEP_3
	];

	return hiddenPaths.includes(path) ? null : (
		<footer className="footer">
			<div className="footer-col-1">
				<strong><span>Developed by <a href="https://vpdweb.github.io">VPDWEB</a></span></strong>
			</div>
			<div className="footer-col-2">
				<img className="footer-logo"
					src={logo}
				/>
				<h5>&copy;&nbsp;{new Date().getFullYear()}</h5>
			</div>
			<div className="footer-col-3">
				<strong>
					<span>
        Phone: [Phone number here]
					</span>
				</strong>
			</div>
		</footer>
	);
};

export default Footer;
