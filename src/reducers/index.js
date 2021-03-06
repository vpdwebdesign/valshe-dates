import productReducer from './productReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import filterReducer from './filterReducer';
import checkoutReducer from './checkoutReducer';
import userReducer from './userReducer';
import appReducer from './appReducer';

const rootReducer = {
	products: productReducer,
	cart: cartReducer,
	auth: authReducer,
	profile: profileReducer,
	filter: filterReducer,
	users: userReducer,
	checkout: checkoutReducer,
	app: appReducer
};

export default rootReducer;
