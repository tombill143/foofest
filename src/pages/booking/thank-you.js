import React from "react";
import styles from "../../styles/Booking.module.css";
import Link from "next/link";
import Head from "next/head";

const Thankyou = () => {
  return (
    <>
      <Head>
        <title>Thank You</title>
        <meta name="keywords" content="foofest" />
      </Head>
      <div>
        <h1 className={styles.h1thankyou}>Thank You</h1>
        <img className={styles.hornsimage} src="/horns.png" alt="horns"></img>
        <Link href="/">
          <div className={styles.backToHomePageButton}>Back To Home Page</div>
        </Link>
      </div>
    </>
  );
};

export default Thankyou;
