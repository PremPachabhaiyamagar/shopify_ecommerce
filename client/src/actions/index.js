import axios from "axios";
import { toast } from "react-toastify";

import {
  ADD_TO_CART,
  DELETE_CART,
  EMPLTY_CART,
  GET_ALL_PRODUCTS,
  INITIAL_CART_DATA,
  INITIAL_DATA,
  LOGIN_USER,
  LOGOUT_USER,
} from "./actionTypes";
import connectionString from "../components/connString";
let Url = `${connectionString}/api/users/login`;

export const setUser = (data) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
};
export const getInitialData = (data) => {
  return {
    type: INITIAL_DATA,
    payload: data,
  };
};
export const setProducts = (data) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: data,
  };
};
export const logoutUser = (data) => {
  return {
    type: LOGOUT_USER,
    payload: data,
  };
};
export const addtoCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
export const removeFromCart = (data) => {
  return {
    type: DELETE_CART,
    payload: data,
  };
};
export const cartData = (data) => {
  return {
    type: INITIAL_CART_DATA,
    payload: data,
  };
};
export const emptyCart = (data) => {
  return {
    type: EMPLTY_CART,
    payload: data,
  };
};
export const loginUser = (data) => {
  return async (dispatch) => {
    await axios
      .post(Url, data)
      .then((response) => {
        console.log(response);
        toast.success("Logged in successfully");
        dispatch(setUser(response.data.user));
        localStorage.setItem("User", JSON.stringify(response.data));
        // setTimeout(() => {
        //   console.log(response);
        // }, [2000]);
      })
      .catch((err) => {
        toast.error("Invalid Credentials");
      });
  };
};

export const getInitial = () => {
  return (dispatch) => {
    const data = JSON.parse(localStorage.getItem("User"));

    dispatch(getInitialData(data));
  };
};
//  async function gett() {
//  	const data = await axios.get(
//  		"https://shopify-backend7777.herokuapp.com/post/get-post/"
//  	);
//  	return data.data.post;
//  }
export const getInitialProducts = () => {
  return (dispatch) => {
    axios.get(`${connectionString}/post/get-post/`).then((res) => {
      dispatch(setProducts(res.data.post));
    });
    //console.log(result);

    //dispatch(setProducts(result));
  };
};
export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("User");
    dispatch(logoutUser(null));
  };
};
export const add = (obj) => {
  let post = obj.post;
  let idd = obj.idd;
  let total = obj.total;
  let quantity = obj.quantity;

  return (dispatch) => {
    axios
      .post(`${connectionString}/post/add-to-cart/`, {
        post: post,
        id: idd,
        total: total,
        quantity: quantity,
      })
      .then((res) => {
        dispatch(addtoCart(res.data));

        toast.success("Added to cart successfully");
      })
      .catch((err) => toast.error("Item already in cart"));
  };
};
export const remove = (obj) => {
  return (dispatch) => {
    axios
      .patch(`${connectionString}/post/remove-item/${obj.key}`, {
        headers: obj.params,
      })
      .then((res) => {
        dispatch(removeFromCart(res.data.post));
      });
  };
};
export const getInitialDataCartData = (obj) => {
  return (dispatch) => {
    axios
      .get(`${connectionString}/post/get-cart-items/${obj}`)
      .then((res) => dispatch(cartData(res.data.cartItems)));
  };
};
export const emptyCartt = (obj) => {
  return (dispatch) => {
    dispatch(emptyCart([]));
  };
};
