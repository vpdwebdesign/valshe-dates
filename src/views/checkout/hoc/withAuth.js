/* eslint-disable no-nested-ternary */
import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const withAuth = (Component) => {
	return withRouter((props) => {
		const {
			isAuth,
			cart,
			profile,
			shipping,
			payment
		} = useSelector(state => ({
			isAuth: !!state.auth.id && !!state.auth.role,
			cart: state.cart,
			shipping: state.checkout.shipping,
			payment: state.checkout.payment,
			profile: state.profile
		}));
		const dispatch = useDispatch();

		const calculateSubTotal = () => {
			let total = 0;

			if (cart.length !== 0) {
				const result = cart.map(product => product.price * product.quantity).reduce((a, b) => a + b);
				total = result;
			}

			return total;
		};

		return (
			<>
				{!isAuth ? (
					<Redirect to="/signin" />
				) : cart.length === 0 ? (
					<Redirect to="/" />
				) : null}
				<Component
					{...props}
					cart={cart}
					dispatch={dispatch}
					payment={payment}
					profile={profile}
					shipping={shipping}
					subtotal={calculateSubTotal()}
				/>
			</>
		);
	});
};

export default withAuth;
