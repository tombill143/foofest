import React, { useEffect, useState } from "react";
import styles from "../../styles/Booking.module.css";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
 "https://ajpnubqenhfdlqfvcruv.supabase.co",
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqcG51YnFlbmhmZGxxZnZjcnV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU1MjExNDEsImV4cCI6MjAwMTA5NzE0MX0.x01cvbcNdxvDlmDEWUOD2s5G1Opvzltog68pGAwqtVE"
);

const ThankYouPage = () => {
  const router = useRouter();
  const [paymentData, setPaymentData] = useState({});

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const data = {};

    for (let [key, value] of queryParams.entries()) {
      data[key] = value;
    }

    setPaymentData(data);
    console.log("Payment Data:", data);

   
    supabase
      .from("payments")
      .insert([data])
      .then((response) => {
        console.log("Data inserted successfully:", response);
      })
      .catch((error) => {
        console.error("Error inserting data:", error);
      });


  }, []);

  return (
    <>
      <Head>
        <title>Thank You</title>
        <meta name="keywords" content="foofest" />
      </Head>
      <div>
        <h1 className={styles.h1thankyou}>Thank You</h1>
        <img className={styles.hornsimage} src="/horns.png" alt="horns" />
        <div className={styles.paymentSummary}>
          <p>Card Number: {paymentData.cardNumber}</p>
          <p>Name on Card: {paymentData.nameOnCard}</p>
          <p>Expiration Date: {paymentData.expirationDate}</p>
          <p>CVV: {paymentData.cvv}</p>
          <p>Shipping Method: {paymentData.shippingMethod}</p>
        </div>
        <Link href="/">
          <div className={styles.backToHomePageButton}>Back To Home Page</div>
        </Link>
      </div>
    </>
  );
};

export default ThankYouPage;