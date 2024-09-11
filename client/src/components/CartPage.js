import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Search from "./Search";

import { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {
  getInitialDataCartData,
  remove,
  getInitial,
  emptyCartt,
} from "../actions";
import Footer from "./Footer";
import Loader from "./Loader";
import { toast } from "react-toastify";

export const CartPage = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [sum, setSum] = useState(0);
  const [cartItem, setCartItem] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    initializer();
    props.getInitialData();
    if (props.cart.cartProducts.length === 0) {
      setSum(0);
    }

    setLoading(false);
  }, [props?.cart?.cartProducts?.length || sum]);
  // useLayoutEffect(() => {
  // 	props.getInitialData();
  // }, [props.user?.user?.token || sum]);

  const calculateSum = async () => {
    var res = 0;
    if (props.cart?.cartProducts?.length !== 0) {
      props.cart?.cartProducts?.map((item) => {
        res = res + item?.total;
        setSum(res);
        return sum;
      });
    }
  };
  if (!props?.user?.token) {
    navigate("/login");
  }

  const cItem = async () => {
    if (props?.cart?.cartProducts !== null) {
      setCartItem(
        props.cart?.cartProducts?.map((item) => {
          return item?.post;
        })
      );
    }
  };
  const initializer = () => {
    props.getCartData(params.id);

    cItem();
    calculateSum();
  };

  // if (props.cart.cartProducts) {
  // 	console.log(cartItem?.post);
  // }

  const deleteItem = (key) => {
    let obj = { key: key, params: params };
    props.deletefromCart(obj);
    toast.warning("Item deleted Successfully");
  };

  const makepayment = async (token) => {
    setLoading(true);
    let body = {
      product: "A brand new car",
      price: sum,
      token,
      cartItem: cartItem,
      params,
    };

    const data = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/post/payment`,
      body
    );

    if (data.data.result) {
      props.emptyCart();
      setSum(0);
      setLoading(false);
    }
  };
  // const testFucn = async () => {
  // 	let body = {
  // 		product: "A brand new car",
  // 		price: sum,
  //
  // 		cartItem: cartItem,
  // 		params,
  // 	};
  // 	console.log(body);
  // 	const data = await axios.post(
  // 		"https://shopify-backend7777.herokuapp.com/post/test",
  // 		body
  // 	);
  // };
  const docross = (e) => {
    e.preventDefault();

    document.querySelector(".cross").classList.add("cross-display");
  };

  return (
    <div className="flex flex-col items-center">
      <Header />
      <Navbar cartItem={cartItem} />
      <Search />
      {!loading ? (
        <div>
          <h1 className="text-center">
            For Test Payment,use card number <b>4242424242424242</b>
          </h1>
          {props.cart && props.cart.cartProducts.length != 0 ? (
            props.cart.cartProducts.map((item) => (
              <div
                key={item?.post?._id}
                className="flex flex-col justify-center items-center min-w-[90vw]"
              >
                <div
                  className="w-[90vw]  sm:w-[80vw] md:w-[60vw] lg:w-[35vw] gap-x-1 h-auto rounded shadow border-2 p-2 my-10"
                  onmouseover={(e) => docross(e)}
                >
                  <div className="flex items-center justify-center mb-7 ">
                    <img src={item?.post?.photo_url} className="  shadow-lg" />
                  </div>
                  <div className="w-4/5 ml-5">
                    <p className=" text-3xl font-bolder">{item?.post?.title}</p>
                    <div className="flex justify-between">
                      <p className="font-bolder text-lg mt-5">Ouantity</p>
                      <p className="font-extrabold text-lg mt-5">
                        {item?.quantity}
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <p className="font-bolder text-lg mt-5">TOTAL</p>
                      <p className="font-extrabold text-lg mt-5">
                        ${item?.total}
                      </p>
                    </div>
                    <ImCross
                      className="relative bottom-0 right-0 text-red-600 cross"
                      onClick={(key) => deleteItem(item.date)}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-5xl mt-[100px] text-center px-5">
              No Items to show
            </h1>
          )}
        </div>
      ) : (
        <Loader />
      )}

      <div className="w-full flex justify-end pr-10">
        <p className="font-bolder text-lg mt-5 pr-5">SUBTOTAL</p>
        <p className="font-extrabold text-lg mt-5">${sum}</p>
      </div>
      <div className="w-full h-10 border-b-2 mb-10"></div>
      <Link to={`/`}>
        <button className="w-[95vw] h-[50px] border-2 rounded-md bg-black text-white">
          CONTINUE TO SHOPPING
        </button>
      </Link>
      <StripeCheckout
        className="w-[95vw] border-2 rounded-md bg-green-500 text-white mt-1 mb-5"
        token={makepayment}
        stripeKey="sk_test_51OwgKfSIKn7PNuS1ZOzdq1AVTIrGwaLah2ULU6VgfIiFyd1mg5yBe3sslQuCoDNEmirLFHENcssWiqUD7nHnlux700kGyOZJvj"
      />
      <Footer />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletefromCart: (obj) => dispatch(remove(obj)),
    getInitialData: () => dispatch(getInitial()),
    getCartData: (obj) => dispatch(getInitialDataCartData(obj)),
    emptyCart: () => dispatch(emptyCartt()),
  };
};
const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user,
    cart: state.cart,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
