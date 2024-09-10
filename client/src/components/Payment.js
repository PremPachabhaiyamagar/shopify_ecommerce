import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Search from "./Search";

import { loadStripe } from "@stripe/stripe-js";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useParams } from "react-router-dom";
import connectionString from "./connString";

const stripePromise = loadStripe(
  "pk_test_51Ks9rESGIDSGcSMpqLqYekJ4eUM006ajSr34jPDUouFak7SQHqLMRHRCfK9ueWsO2BFSEuM7xRa0OyFxPi0zH0tp00mrD6E6oS"
);

export const Payment = () => {
  const [payment, setPayment] = useState(false);

  // const options = {
  // 	// passing the client secret obtained from the server
  // 	clientSecret:{{"sk_test_51Ks9rESGIDSGcSMpQeSxCpAb5LWdmx1OU0qScHxY1MfFv5sl1yMKoj5DdfmwByykSpbwgiHXGl0vVdd04w2NVCeR00SlolJHEx"}}
  //
  // };

  const makepayment = async (token) => {
    let body = {
      product: "A brand new car",
      price: 10 * 100,
      token,
    };
    console.log(token);
    const data = await axios.post(`${connectionString}/post/payment`, body);

    setPayment(true);
  };
  return (
    <div>
      <Header />
      <Navbar />
      <Search />
      <div className="product flex flex-col justify-center items-center">
        <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        />
        <div>
          <StripeCheckout
            token={makepayment}
            stripeKey="pk_test_51Ks9rESGIDSGcSMpqLqYekJ4eUM006ajSr34jPDUouFak7SQHqLMRHRCfK9ueWsO2BFSEuM7xRa0OyFxPi0zH0tp00mrD6E6oS"
          />
        </div>
        {payment && <h1>Payment successfull</h1>}
      </div>
    </div>
  );
};
export default Payment;
