/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { SIGNIN, SIGNUP, ADMIN_DASHBOARD } from 'constants/routes';

import Cart from 'components/cart/Cart';
import Navigation from 'components/ui/Navigation';
import Footer from 'components/ui/Footer';

const PublicRoute = ({
	userType,
	isAuth,
	component: Component,
	path,
	...rest
}) => (
		<Route
			{...rest}
			component={(props) => {
				const { from } = props.location.state || { from: { pathname: '/' } };

				return (
					isAuth && userType === 'ADMIN'
						? (
							<Redirect to={ADMIN_DASHBOARD} />
						)
						: (isAuth && userType === 'USER') && (path === SIGNIN || path === SIGNUP)
							? (
								<Redirect to={from} />
							)
							: (
								<>
									<Navigation path={path} isAuth={isAuth} />
									<Cart isAuth={isAuth} />
									<main className="content">
										<Component {...props} />
									</main>
									<Footer path={path} />
								</>
							)
				);
			}}
		/>
	);

const mapStateToProps = ({ auth }) => ({
	isAuth: !!auth.id && !!auth.role,
	userType: auth.role
});

export default connect(mapStateToProps)(PublicRoute);
