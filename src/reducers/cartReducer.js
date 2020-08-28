import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	CLEAR_CART,
	ADD_QTY_ITEM,
	MINUS_QTY_ITEM
} from 'constants/constants';

export default (state = [], action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return state.some(product => product.id === action.payload.id)
				? state
				: [...state, action.payload];
		case REMOVE_FROM_CART:
			return state.filter(product => product.id !== action.payload);
		case CLEAR_CART:
			return [];
		case ADD_QTY_ITEM:
			return state.map((product) => {
				if (product.id === action.payload) {
					return {
						...product,
						quantity: product.quantity + 1
					}
				}
				return product;
			});
		case MINUS_QTY_ITEM:
			return state.map((product) => {
				if (product.id === action.payload) {
					return {
						...product,
						quantity: product.quantity - 1
					}
				}
				return product;
			});
		default:
			return state;
	}
};
