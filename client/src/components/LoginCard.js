import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { connect } from "react-redux";
import { loginUser } from "../actions";
import { getInitial } from "../actions";
import connectionString from "./connString";
import Loader from "./Loader";
import axios from "axios";

const LoginCard = (props) => {
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    props.getInitialData();
    if (props.user.user) {
      navigate("/");
    }
  }, [props.user.length || props.user.user]);

  const loginUser = async () => {
    setLoading(true);
    const loginDetails = { email, password };
    await props.login(loginDetails);
    if (props.user.user) setLoading(false);
    return setLoading(false);
  };

  return (
    <div>
      {!loading ? (
        <div className="w-[90vw] h-[40vh] mt-[10vh] flex flex-col items-center py-10 border shadow rounded sm:w-[70vw] md:w-[70vw] lg:w-[55vw]">
          <input
            placeholder="Enter your email"
            className="w-3/4 py-3 px-3 border-b-2 "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Enter password"
            className="w-3/4 py-3 px-3 border-b-2 mt-5"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="py-3 px-5 shadow my-10 bg-green-500 text-xl rounded "
            onClick={(e) => loginUser()}
          >
            Login
          </button>
          <Link to="/register">
            <p className="text-lg">I have an account ? Register</p>
          </Link>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { user: state.user };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginDetails) => dispatch(loginUser(loginDetails)),
    getInitialData: () => dispatch(getInitial()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginCard);
