import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	CLEAR_CART,
	ADD_QTY_ITEM,
	MINUS_QTY_ITEM
} from 'constants/constants';

export const addToCart = product => ({
	type: ADD_TO_CART,
	payload: product
});

export const removeFromCart = id => ({
	type: REMOVE_FROM_CART,
	payload: id
});

export const clearCart = () => ({
	type: CLEAR_CART
});

export const addQtyItem = id => ({
	type: ADD_QTY_ITEM,
	payload: id
});

export const minusQtyItem = id => ({
	type: MINUS_QTY_ITEM,
	payload: id
});
