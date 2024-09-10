import Home from "./components/Home";
import "./index.css";
import "./new.css";
import { Route, Routes } from "react-router-dom";
import { SingleProduct } from "./components/SingleProduct";
import Login from "./components/Login";
import Register from "./components/Register";
import CartPage from "./components/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./components/Payment";
import PurchasePage from "./components/PurchasePage";
import { useState, useEffect } from "react";
function App() {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".center");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, [isLoading]);

  if (isLoading) {
    return null;
  }
  return (
    <div className="App">
      <ToastContainer position="top-center" autoClose={1500} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sp/:id/" element={<SingleProduct />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/cart/:id" element={<CartPage />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/my-items/:id" element={<PurchasePage />} />
      </Routes>
    </div>
  );
}

export default App;
