import React from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import connectionString from "./connString";

export const SingleCard = ({ params, user, loading, setLoading }) => {
  const [postt, setPostt] = useState();
  const [loadingg, setLoadingg] = useState(true);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!user.user) {
      navigate("/login");
    }

    axios
      .get(`${connectionString}/post/get-single-post/${params.id}`)
      .then((res) => {
        setPostt(res.data.post);
        setLoadingg(false);
      });
  }, [user.user]);

  return (
    <>
      {!loadingg ? (
        <div className="flex flex-col justify-center items-center min-w-[90vw]">
          {postt && (
            <>
              <div className="w-[90vw]  sm:w-[70vw]  md:w-[60vw] lg:w-[45vw] gap-x-1 h-auto rounded shadow border-2 p-2 my-10">
                <div className="flex items-center justify-center mb-7 ">
                  <img
                    src={postt.photo_url}
                    className="h-4/5 w-full  shadow-lg"
                  />
                </div>
                <p className="text-center text-lg font-bolder">{postt.title}</p>
              </div>
              <div className="ml-5">
                <p className="text-center leading-10 text-lg lg:w-[30vw] float-right ">
                  {postt.description}
                </p>
              </div>
            </>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user,
  };
};
export default connect(mapStateToProps, null)(SingleCard);
