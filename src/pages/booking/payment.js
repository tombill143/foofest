import React, { useState } from "react";
import styles from "../../styles/Booking.module.css";
import Head from "next/head";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";

const supabase = createClient(
  "https://ajpnubqenhfdlqfvcruv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqcG51YnFlbmhmZGxxZnZjcnV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU1MjExNDEsImV4cCI6MjAwMTA5NzE0MX0.x01cvbcNdxvDlmDEWUOD2s5G1Opvzltog68pGAwqtVE"
);

const Payment = () => {
  const router = useRouter();

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    nameOnCard: "",
    expirationDate: "",
    cvv: "",
    shippingMethod: "",
  });

  const queryParams = new URLSearchParams({
    cardNumber: paymentData.cardNumber,
    nameOnCard: paymentData.nameOnCard,
    expirationDate: paymentData.expirationDate,
    cvv: paymentData.cvv,
    shippingMethod: paymentData.shippingMethod,
  });

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform payment processing here using a payment processing service like Stripe
    // You can use the paymentData state to access the entered payment details

    const { data, error } = await supabase.from("customers").insert([
      {
        cardNumber: paymentData.cardNumber,
        nameOnCard: paymentData.nameOnCard,
        expirationDate: paymentData.expirationDate,
        cvv: paymentData.cvv,
        shippingMethod: paymentData.shippingMethod,
      },
    ]);

    if (error) {
      console.error("Error inserting data:", error.message);
      return;
    }

    console.log("Data inserted:", data);
    console.log("Payment successful!");

    // Redirect to thank you page with payment data in the URL
    router.push(`/booking/thank-you?${queryParams.toString()}`);

    // Wait for the insert operation to propagate to real-time subscriptions
    await supabase
      .from("customers")
      .on("*")
      .then(() => {
        console.log("Data is now available in real time.");
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
              maxLength={16} // Limit input to 16 characters
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
              maxLength={4} // Limit input to 16 characters
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
              maxLength={3} // Limit input to 16 characters
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
          <Link href={`/booking/thank-you?${queryParams.toString()}`}>
            <div className={styles.nextButton}>Pay Now</div>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Payment;
