import React from 'react';

const CartToggle = (props) => {
	const onClickToggle = (e) => {
		if (document.body.classList.contains('is-cart-open')) {
			document.body.classList.remove('is-cart-open');
		} else {
			document.body.classList.add('is-cart-open');
		}
	};

	document.addEventListener('click', (e) => {
		const closest = e.target.closest('.cart');
		const toggle = e.target.closest('.cart-toggle');
		const closeToggle = e.target.closest('.cart-item-remove');

		if (!closest && document.body.classList.contains('is-cart-open') && !toggle && !closeToggle) {
			document.body.classList.remove('is-cart-open');
		}
	});


	return props.children({ onClickToggle });
};

export default CartToggle;
