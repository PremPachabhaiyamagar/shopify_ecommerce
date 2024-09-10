import loginReducer from "./userReducer/user";
import postReducer from "./productReducer/posts";
import { combineReducers } from "redux";
import { cartReducer } from "./productReducer/cart";

const rootReducer = combineReducers({
	user: loginReducer,
	post: postReducer,
	cart: cartReducer,
});
export default rootReducer;
