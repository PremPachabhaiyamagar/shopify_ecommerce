import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Search from "./Search";
import Banner from "./Banner";
import About from "./About";
import Footer from "./Footer";
import { connect } from "react-redux";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  getInitial,
  getInitialProducts,
  loginUser,
  getInitialDataCartData,
} from "../actions";
import Loader from "./Loader";

export const Home = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [lengthh, setLengthh] = useState(0);
  useEffect(() => {
    helper();
    //props?.cart?.cartProducts?.length && setLoading(false);
  }, [props.user?.user?.user?._id || loading]);

  //console.log(props?.user?.user?.user);
  const helper = () => {
    setLoading(true);
    getpost();

    setLengthh(props.cart?.cartProducts?.length);
    if (!props?.user?.user?.user?._id) {
      navigate("/login");
    }
    if (props.cart?.cartProducts) setLoading(false);
  };
  const getpost = async () => {
    setLoading(true);
    if (props?.user?.user?.user?._id !== undefined) {
      await props.getCartData(props?.user?.user?.user?._id);
      await props.getInitialData();
      await props.getAllProducts();
    }

    //return data;
  };

  const changePage = (post) => {
    //e.preventDefault();

    navigate(`/sp/${post}`);
  };

  return (
    <div className="flex flex-col items-center">
      <Header />

      <Navbar />
      <Search />
      {!loading ? (
        <div className="md:flex md:flex-row  md:flex-wrap md:items-center md:justify-center gap-x-3">
          {props.post &&
            props.post.posts &&
            props.post.posts.map((post) => (
              <div
                key={post._id}
                className="w-[80vw]  sm:w-[70vw]  gap-x-1 h-auto rounded shadow border-2 p-2 my-10 md:w-[40vw] "
                onClick={(e) => changePage(post._id)}
              >
                <div className="flex items-center justify-center mb-7">
                  <img
                    src={post.photo_url}
                    className=" shadow-lg min-h-[30vh] max-h-[30vh] "
                  />
                </div>
                <p>{post.title}</p>
                <div className="flex mt-3 mb-3">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <h1 className="font-black text-xl">${post.price}</h1>
              </div>
            ))}
        </div>
      ) : (
        <Loader />
      )}

      <Banner />
      <About />
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user,
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginDetails) => dispatch(loginUser(loginDetails)),
    getInitialData: () => dispatch(getInitial()),
    getAllProducts: () => dispatch(getInitialProducts()),
    getCartData: (obj) => dispatch(getInitialDataCartData(obj)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
