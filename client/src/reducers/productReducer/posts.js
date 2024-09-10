import { GET_ALL_PRODUCTS } from "../../actions/actionTypes";
const initialState = {
	posts: null,
	loading: true,
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_PRODUCTS:
			return {
				...state,
				posts: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
export default productReducer;
