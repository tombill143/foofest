import React, { useState } from "react";
import styles from "../../styles/Booking.module.css";
import Head from "next/head";
import Link from "next/link";

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    nameOnCard: "",
    expirationDate: "",
    cvv: "",
    shippingMethod: "",
    // other payment data fields
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform payment processing here using a payment processing service like Stripe
    // You can use the paymentData state to access the entered payment details
    // Display a confirmation message upon successful payment
    console.log(paymentData); // Example: Logging payment data to the console
  };

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>Payment</title>
        <meta name="keywords" content="foofest" />
      </Head>
      <div>
        <h1 className={styles.paymentHeading}>Payment Details</h1>
        <form onSubmit={handleSubmit} className={styles.paymentForm}>
          <div className={styles.formGroup}>
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleChange}
              required
              className={`${styles.inputField} ${styles.centeredInput}`} // Add the centeredInput class here
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="nameOnCard">Name on Card</label>
            <input
              type="text"
              id="nameOnCard"
              name="nameOnCard"
              value={paymentData.nameOnCard}
              onChange={handleChange}
              required
              className={`${styles.inputField} ${styles.centeredInput}`} // Add the centeredInput class here
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="text"
              id="expirationDate"
              name="expirationDate"
              value={paymentData.expirationDate}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={paymentData.cvv}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="shippingMethod">Shipping Method</label>
            <select
              id="shippingMethod"
              name="shippingMethod"
              value={paymentData.shippingMethod}
              onChange={handleChange}
              className={styles.inputField}
            >
              <option value="">Select shipping method</option>
              <option value="standard">Standard Shipping</option>
              <option value="express">Express Shipping</option>
            </select>
          </div>
          {/* Other payment form fields */}
          <Link href="/booking/thank-you">
            <div className={styles.nextButton}>Pay Now</div>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Payment;
