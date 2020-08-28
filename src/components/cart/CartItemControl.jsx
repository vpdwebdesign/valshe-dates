import React from 'react';
import PropTypes from 'prop-types';
import { addQtyItem, minusQtyItem } from 'actions/cartActions';

const CartItemControl = ({ product, dispatch }) => {
	const onAddQty = () => {
		if (product.quantity < product.maxQuantity) {
			dispatch(addQtyItem(product.id));
		}
	};

	const onMinusQty = () => {
		if ((product.maxQuantity >= product.quantity) && product.quantity !== 0) {
			dispatch(minusQtyItem(product.id));
		}
	};

	return (
		<div className="cart-item-control">
			<button
				className="button button-border button-border-gray button-small cart-control cart-control-add"
				disabled={product.maxQuantity === product.quantity}
				onClick={onAddQty}
			>
				+
			</button>
			<button
				className="button button-border button-border-gray button-small cart-control cart-control-minus"
				disabled={product.quantity === 1}
				onClick={onMinusQty}
			>
				-
			</button>
		</div>
	);
};

CartItemControl.propType = {
	action: PropTypes.objectOf(PropTypes.func).isRequired,
	product: PropTypes.object.isRequired
};

export default CartItemControl;
