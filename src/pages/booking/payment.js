import React, { useState, useEffect } from "react";
import styles from "../../styles/Booking.module.css";
import Head from "next/head";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import Timer from "../componants/Timer";

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
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    zipcode: "",
    campsite: "",
    numberOf2ManTents: "",
    numberOf3ManTents: "",
  });

  useEffect(() => {
    const {
      firstName,
      lastName,
      email,
      address,
      zipcode,
      campsite,
      numTickets,
      numberOf2ManTents,
      numberOf3ManTents,
    } = router.query;

    // Update paymentData state with the retrieved data
    setPaymentData((prevData) => ({
      ...prevData,
      firstname: firstName || "",
      lastname: lastName || "",
      email: email || "",
      address: address || "",
      zipcode: zipcode || "",
      campsite: campsite || "",
      numTickets: numTickets || "",
      numberOf2ManTents: numberOf2ManTents || "",
      numberOf3ManTents: numberOf3ManTents || "",
    }));
  }, [router.query]);

  const handleChange = (e) => {
    if (e.target.name === "numberOf2ManTents") {
      setPaymentData({
        ...paymentData,
        numberOf2ManTents: e.target.value,
      });
    } else if (e.target.name === "numberOf3ManTents") {
      setPaymentData({
        ...paymentData,
        numberOf3ManTents: e.target.value,
      });
    } else {
      setPaymentData({
        ...paymentData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const shippingMethod = paymentData.shippingMethod === "express";

      // Create a separate object for the API request
      const requestData = {
        cardNumber: paymentData.cardNumber,
        nameOnCard: paymentData.nameOnCard,
        expirationDate: paymentData.expirationDate,
        cvv: paymentData.cvv,
        shippingMethod: shippingMethod,
        firstname: paymentData.firstname,
        lastname: paymentData.lastname,
        email: paymentData.email,
        address: paymentData.address,
        zipcode: paymentData.zipcode,
        campsite: paymentData.campsite,
        numberOf2ManTents: paymentData.numberOf2ManTents,
      };

      // Insert the payment data into Supabase
      const { data, error } = await supabase
        .from("customers")
        .insert(requestData);

      if (error) {
        console.log("Error inserting data: ", error.message);
      } else {
        console.log("Data inserted successfully: ", data);

        // Send the payment data to the API endpoint
        const response = await fetch("/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData), // Use the requestData object here
        });

        if (response.ok) {
          // Redirect to thank you page
          router.push("/booking/thank-you");
        } else {
          console.log("Failed to submit payment data to API");
        }
      }
    } catch (error) {
      console.log("Error inserting data: ", error.message);
    }
  };

  return (
    <>
      <Head></Head>
      <div>
        <Timer seconds={2000} />
        <h1 className={styles.paymentHeading}>Payment Details</h1>
        <form onSubmit={handleSubmit} className={styles.paymentForm}>
          {/* hidden fields for URL data */}
          <input
            type="hidden"
            id="firstName"
            name="firstname"
            value={paymentData.firstname}
          />
          <input
            type="hidden"
            id="lastName"
            name="lastname"
            value={paymentData.lastname}
          />
          <input
            type="hidden"
            id="email"
            name="email"
            value={paymentData.email}
          />
          <input
            type="hidden"
            id="address"
            name="address"
            value={paymentData.address}
          />
          <input
            type="hidden"
            id="zipcode"
            name="zipcode"
            value={paymentData.zipcode}
          />
          <input
            type="hidden"
            id="campsite"
            name="campsite"
            value={paymentData.campsite}
          />
          <input
            type="hidden"
            id="numtickets"
            name="numtickets"
            value={paymentData.numberOf2ManTents}
          />
          <input
            type="hidden"
            id="numTents"
            name="numberOf2ManTents"
            value={paymentData.numberOf3ManTents}
          />

          <input
            type="hidden"
            id="numTents3"
            name="numberOf3ManTents"
            value={paymentData.numberOf3ManTents}
          />
          {/* Existing payment form fields */}
          <div className={styles.formGroup}>
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="integer"
              id="cardNumber"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleChange}
              maxLength={16} // Limit input to 16 characters
              required
              className={`${styles.inputField} ${styles.centeredInput}`}
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
              className={`${styles.inputField} ${styles.centeredInput}`}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="integer"
              id="expirationDate"
              name="expirationDate"
              value={paymentData.expirationDate}
              onChange={handleChange}
              maxLength={4} // Limit input to 4 characters
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cvv">CVV</label>
            <input
              type="integer"
              id="cvv"
              name="cvv"
              value={paymentData.cvv}
              onChange={handleChange}
              maxLength={3} // Limit input to 3 characters
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

          <button type="submit" className={styles.btn}>
            Pay Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Payment;
