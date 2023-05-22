import React from "react";
import styles from "../../styles/Booking.module.css";
import Link from "next/link";

const Thankyou = () => {
  return (
    <div>
      <h1 className={styles.h1thankyou}>Thank You</h1>
      <img className={styles.hornsimage} src="/horns.png" alt="horns"></img>
      <button type="submit" className={styles.thankyoubutton}>
        Return To Home Page
      </button>
    </div>
  );
};

export default Thankyou;
