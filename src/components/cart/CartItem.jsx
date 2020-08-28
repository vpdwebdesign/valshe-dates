import React from 'react';
import PropTypes from 'prop-types';

import { removeFromCart } from 'actions/cartActions';
import { displayMoney } from 'helpers/utils';
import CartItemControl from './CartItemControl';
import Badge from '../ui/Badge';
import ImageLoader from '../ui/ImageLoader';

const CartItem = ({ dispatch, product }) => {
	const onRemoveFromCart = () => dispatch(removeFromCart(product.id));

	return (
		<div className="cart-item">
			<CartItemControl
				dispatch={dispatch}
				product={product}
			/>
			<div className="cart-item-wrapper">
				<div className="position-relative margin-right-m margin-left-s">
					<Badge count={product.quantity} />
				</div>
				<div className="cart-item-img-wrapper">
					<ImageLoader
						className="cart-item-img"
						src={product.image}
					/>
				</div>
				<div className="cart-item-details">
					<h5 className="cart-item-name">
						{product.name}
					</h5>
					<h5 className="cart-item-price">
						{displayMoney(product.price * product.quantity)}
						<span>{` (x ${product.quantity}) `}</span>
					</h5>
				</div>

				<button
					className="cart-item-remove button button-border button-border-gray button-small"
					onClick={onRemoveFromCart}
				>
					<i className="fa fa-trash" />
				</button>
			</div>
		</div>
	);
};

CartItem.propType = {
	product: PropTypes.object.isRequired,
	cart: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CartItem;
