import React from 'react';

import useDocumentTitle from 'hooks/useDocumentTitle';
import { CHECKOUT_STEP_2 } from 'constants/routes';
import { displayMoney } from 'helpers/utils';
import CartItem from 'components/cart/CartItem';
import StepTracker from '../components/StepTracker';
import Pagination from '../components/Pagination';
import withAuth from '../hoc/withAuth';

const OrderSummary = ({
	cart,
	subtotal,
	dispatch,
	history
}) => {
	useDocumentTitle('Check Out Step 1 | Valshe Dates');
	const onClickPrevious = () => history.push('/');
	const onClickNext = () => history.push(CHECKOUT_STEP_2);

	return (
		<div className="checkout">
			<StepTracker current={1} />
			<div className="checkout-step-1">
				<h3 className="text-center">Order Summary</h3>
				<span className="d-block text-center">Review items in your cart.</span>
				<br />
				<div className="checkout-items">
					{cart.map(product => (
						<CartItem
							cart={cart}
							dispatch={dispatch}
							key={product.id}
							product={product}
						/>
					))}
				</div>
				<br />
				<div className="cart-total text-right">
					<p className="cart-total-title">Subtotal:</p>
					<h2 className="cart-total-amount">{displayMoney(subtotal)}</h2>
				</div>
				<br />
				<Pagination
					disabledNext={false}
					history={history}
					onClickNext={onClickNext}
					onClickPrevious={onClickPrevious}
					previousLabel="Continue Shopping"

				/>
			</div>
		</div>
	);
};

export default withAuth(OrderSummary);
