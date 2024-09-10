import {
	ADD_TO_CART,
	DELETE_CART,
	EMPLTY_CART,
	INITIAL_CART_DATA,
} from "../../actions/actionTypes";

const initialState = {
	cartProducts: [null],
	total: 0,
	loading: true,
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				cartProducts: action.payload.cart,
				total: action.payload.total,
				loading: true,
			};
		case DELETE_CART:
			return {
				...state,
				cartProducts: action.payload,
				loading: true,
			};
		case INITIAL_CART_DATA:
			return {
				...state,
				cartProducts: action.payload,
				loading: true,
			};
		case EMPLTY_CART:
			return {
				...state,
				cartProducts: action.payload,
				loading: true,
			};
		default:
			return state;
	}
};
