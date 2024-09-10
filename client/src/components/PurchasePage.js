import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Search from "./Search";
import axios from "axios";
import { useParams } from "react-router-dom";

import Loader from "./Loader";
import { connect } from "react-redux";
import { getInitial } from "../actions";
import { useNavigate } from "react-router-dom";
import connectionString from "./connString";

export const PurchasePage = (props) => {
  const params = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getPurchasedItems();
    props.getInitialData();
    if (!props.user.user) {
      navigate("/login");
    }
  }, [props.user?.user?.user?._id]);

  const getPurchasedItems = async () => {
    setLoading(true);
    let data = await axios.get(
      `${connectionString}/post/get-purchased-goods/${params.id}`
    );
    setItems(data.data.items);
    setLoading(false);
  };
  let nitems = Object.values(items); //to be looked after in more detail

  // data.data.items.map((item) => {
  // 	item.newCartItem.map((element) => {
  // 		setItems([element]);
  // 	});
  // });

  //  items.forEach((item) => {
  //  	item.newCartItem.forEach((element) => {
  //  		console.log(element);
  //  	});
  //  });

  return (
    <div>
      <Header />
      <Navbar />
      <Search />
      {!loading ? (
        <div>
          {nitems &&
            nitems?.map((ele) => (
              <div>
                {ele.post.map((i) => (
                  <div className="flex flex-col justify-center items-center min-w-[90vw]">
                    <>
                      <div className="w-[90vw]  sm:w-[70vw] md:w-[45vw] lg:w-[35vw] gap-x-1 h-auto rounded shadow border-2 p-2 my-5">
                        <div className="flex items-center justify-center mb-7 ">
                          <img
                            src={i.photo_url}
                            className="h-4/5 w-full  shadow-lg"
                          />
                        </div>
                        <p className="text-center text-2xl font-bolder">
                          {i.title}
                        </p>
                        <p className="text-center text-xl">
                          Purchased Date : {""}
                          <b>
                            {new Date(ele.date).toISOString().substr(0, 10)}
                          </b>
                        </p>
                      </div>

                      <div className="ml-5">
                        <p className="leading-10  text-center text-2xl lg:w-[30vw]"></p>
                      </div>
                    </>
                  </div>
                ))}
              </div>
            ))}
        </div>
      ) : (
        <Loader />
      )}
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
    getInitialData: () => dispatch(getInitial()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PurchasePage);
