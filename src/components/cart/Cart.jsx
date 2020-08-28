import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { CHECKOUT_STEP_1 } from 'constants/routes';
import { clearCart } from 'actions/cartActions';
import { displayMoney } from 'helpers/utils';
import CartItem from './CartItem';
import CartToggle from './CartToggle';
import Modal from '../ui/Modal';
import Boundary from '../ui/Boundary';


const Cart = (props) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const cart = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const calculateTotal = () => {
		let total = 0;

		if (cart.length !== 0) {
			const result = cart.map(product => product.price * product.quantity).reduce((a, b) => a + b);
			total = result.toFixed(2);
		}

		return displayMoney(total);
	};

	const onOpenModal = () => setModalOpen(true);
	const onCloseModal = () => setModalOpen(false);

	const onCheckOut = () => {
		if ((cart.length !== 0 && props.isAuth)) {
			document.body.classList.remove('is-cart-open');
			props.history.push(CHECKOUT_STEP_1);
		} else {
			onOpenModal();
		}
	};

	const onSignInClick = () => {
		onCloseModal();
		document.body.classList.remove('cart-open');
		props.history.push(CHECKOUT_STEP_1);
	};

	const onClearCart = () => {
		if (cart.length !== 0) {
			dispatch(clearCart());
		}
	};

	return (
		<Boundary>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={onCloseModal}
			>
				<p className="text-center">You must sign in to continue checking out</p>
				<br />
				<div className="d-flex-center">
					<button
						className="button button-border button-border-gray button-small"
						onClick={onCloseModal}
					>
						Continue shopping
					</button>
          &nbsp;
					<button
						className="button button-small"
						onClick={onSignInClick}
					>
						Sign in to checkout
					</button>
				</div>
			</Modal>
			<div className="cart">
				<div className="cart-list">
					<div className="cart-header">
						<h3 className="cart-header-title">
							My Cart &nbsp;
							<span>({` ${cart.length} ${cart.length > 1 ? 'items' : 'item'}`})</span>
						</h3>
						<CartToggle>
							{({ onClickToggle }) => (
								<span
									className="cart-toggle button button-border button-border-gray button-small"
									onClick={onClickToggle}
								>
									Close
								</span>
							)}
						</CartToggle>
						<button
							className="cart-clear button button-border button-border-gray button-small"
							disabled={cart.length === 0}
							onClick={onClearCart}
						>
							<span>Clear Cart</span>
						</button>
					</div>
					{cart.length <= 0 && (
						<div className="cart-empty">
							<h5 className="cart-empty-msg">Your cart is empty</h5>
						</div>
					)}
					{cart.map(product => (
						<CartItem
							key={product.id}
							product={product}
							cart={cart}
							dispatch={dispatch}
						/>
					))}
				</div>
				<div className="cart-checkout">
					<div className="cart-total">
						<p className="cart-total-title">Subtotal Amout:</p>
						<h2 className="cart-total-amount">{calculateTotal()}</h2>
					</div>
					<button
						className="cart-checkout-button button"
						disabled={cart.length === 0 || props.location.pathname === '/checkout'}
						onClick={onCheckOut}
					>
						Check Out
					</button>
				</div>
			</div>
		</Boundary>
	);
};

export default withRouter(Cart);
