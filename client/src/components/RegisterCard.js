import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Loader from "./Loader";
import connectionString from "./connString";

export const RegisterCard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [loading, setLoading] = useState(false);
  const registerUser = async () => {
    setLoading(true);
    if (name && email && password && phone) {
      const res = await axios.post(`${connectionString}/api/users/register/`, {
        name,
        email,
        password,
        phone,
      });
      if (res.data)
        if (res.data.ok == true) {
          navigate("/login");
        }
    }
    setLoading(false);
  };

  return (
    <>
      {!loading ? (
        <div className="w-[70vw] h-auto mt-[10vh] flex flex-col items-center py-10 border shadow rounded sm:w-[70vw] md:w-[70vw] lg:w-[55vw]">
          <input
            placeholder="Enter your name"
            className="w-3/4 py-3 px-3 border-b-2 "
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Enter your Email"
            className="w-3/4 py-3 px-3 border-b-2 mt-5"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Enter your password"
            className="w-3/4 py-3 px-3 border-b-2 mt-5"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Enter your phone"
            value={phone}
            className="w-3/4 py-3 px-3 border-b-2 mt-5"
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            className="py-3 px-5 shadow my-10 bg-green-500 text-xl rounded "
            onClick={(e) => registerUser()}
          >
            Register
          </button>
          <Link to="/login">
            <p className="text-lg">I have an account ? Login</p>
          </Link>
        </div>
      ) : (
        <Loader />
      )}{" "}
    </>
  );
};
export default RegisterCard;
