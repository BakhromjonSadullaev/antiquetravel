import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "../Payment/Payment.module.scss";

const Payment = () => {
  return (
    <div className={style.container}>
      <Header />
      <main>
        <img
          src="https://images.unsplash.com/photo-1613243555988-441166d4d6fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className={style.paymentContainer}>
          <h2>Online payments built for success</h2>
          <form>
            <input type="number" placeholder="Card Number" />
            <input type="text" placeholder="dd/mm" />
            <input type="text" placeholder="CSC" />
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
