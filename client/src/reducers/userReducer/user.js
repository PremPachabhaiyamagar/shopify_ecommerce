import {
	LOGIN_USER,
	INITIAL_DATA,
	LOGOUT_USER,
} from "../../actions/actionTypes";
let initialState = {
	user: null,
	token: "",
	loading: true,
	done: false,
};
const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token,
				loading: false,
				done: true,
			};
		case INITIAL_DATA:
			return {
				...state,
				user: action.payload,
				token: action.payload,
				loading: false,
			};
		case LOGOUT_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
export default loginReducer;
