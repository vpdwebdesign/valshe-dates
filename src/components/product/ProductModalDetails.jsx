import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from 'actions/cartActions';
import { displayMoney, displayActionMessage } from 'helpers/utils';
import Modal from 'components/ui/Modal';
import ImageLoader from '../ui/ImageLoader';

const ProductModalDetails = (props) => {
	const [selectedImage, setSelectedImage] = useState(props.product.image);
	const dispatch = useDispatch();
	const product = { imageCollection: [], ...props.product }; // set default props for imageCollectio

	const onAddToCart = () => {
		if (props.foundOnCart) {
			dispatch(removeFromCart(product.id));
			displayActionMessage('Item removed from cart', 'info');
		} else {
			dispatch(addToCart(product));
			displayActionMessage('Item added to cart', 'success');
		}
	};

	useEffect(() => {
		setSelectedImage(props.product.image);
	}, [props.product.image]);

	return !props.product ? null : (
		<Modal
			isOpen={props.isOpenModal}
			onRequestClose={props.onCloseModal}
			overrideStyle={{ padding: 0 }}
		>
			<div className="product-modal">
				{product.imageCollection.length !== 0 && (
					<div className="product-modal-image-collection">
						{product.imageCollection.map(image => (
							<div
								className="product-modal-image-collection-wrapper"
								key={image.id}
								onClick={() => setSelectedImage(image.url)}
							>
								<ImageLoader
									className="product-modal-image-collection-img"
									src={image.url}
								/>
							</div>
						))}
					</div>
				)}
				<div className="product-modal-image-wrapper">
					<ImageLoader
						className="product-modal-image"
						src={selectedImage}
					/>
				</div>
				<div className="product-modal-details">
					<h3>{product.name}</h3>
					<span className="text-subtle">Brand: &nbsp;</span>
					<span><strong>{product.brand}</strong></span>
					<br />
					<br />
					<span>{product.description}</span>
					<br />
					<h1>{displayMoney(product.price)}</h1>
					<div className="product-modal-action">
						<button
							className={`button button-small ${props.foundOnCart ? 'button-border button-border-gray' : ''}`}
							onClick={onAddToCart}
						>
							{props.foundOnCart ? 'Remove From Cart' : 'Add To Cart'}
						</button>
					</div>
				</div>
			</div>
			<button
				className="modal-close-button"
				onClick={props.onCloseModal}
			>
				<i className="fa fa-times-circle" />
			</button>
		</Modal>
	);
};

ProductModalDetails.propType = {
	product: PropTypes.object.isRequired,
	addToCart: PropTypes.func.isRequired,
	foundOnCart: PropTypes.func.isRequired
};

export default ProductModalDetails;
