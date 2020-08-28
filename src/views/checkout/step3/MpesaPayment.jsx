
import React from 'react';

const MPesaPayment = ({ paymentMode, onMPesaModeChange }) => {
	return (
		<div className={`checkout-fieldset-collapse ${paymentMode === 'mpesa' ? 'is-selected-payment' : ''}`}>
			<div className="checkout-field margin-0">
				<div className="checkout-checkbox-field">
					<input
						checked={paymentMode === 'mpesa'}
						className=""
						id="payment-mpesa-checkbox"
						name="checkout_payment"
						onChange={onMPesaModeChange}
						type="radio"
					/>
					<label
						className="d-flex w-100"
						htmlFor="payment-mpesa-checkbox"
					>
						<div className="d-flex-grow-1 margin-left-s">
							<h4 className="margin-0">MPesa</h4>
							<span className="text-subtle d-block margin-top-s">
								Fast, hassle-free mobile payments with MPesa
							</span>
						</div>
						<div className="payment-img payment-img-mpesa" />
					</label>
				</div>
			</div>
		</div>
	);
};

export default MPesaPayment;
