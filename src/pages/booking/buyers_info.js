import React, { useState } from "react";
import styles from "../../styles/Booking.module.css";
import Link from "next/link";
import Head from "next/head";

const BuyersInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipcode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Head>
        <title>Customer Information</title>
        <meta name="keywords" content="foofest" />
      </Head>
      <div className={styles.bookingContainer}>
        <div className={styles.verticalLine}></div>

        <div className={styles.gridContainer}>
          <section className={styles.home_hero}>
            <div className={styles.leftColumn}>
              <img
                src="/selectionimg.JPG"
                alt="Description of the image"
                className={styles.image}
              />
              {/* Timer component or other content */}
            </div>
          </section>
          <section className={styles.home_hero}>
            <div className={styles.rightColumn}>
              <div className={styles.checkboxContainer}>
                <h2 className={styles.h2buyersInfo}>Buyers Info</h2>

                <form className={styles.formContainer}>
                  <label>
                    First Name:
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                  </label>
                  <label>
                    Last Name:
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                  </label>
                  <label>
                    Address:
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                  </label>
                  <label>
                    Email:
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                  </label>
                  <label className={styles.zipcodeLabel}>
                    Zipcode:
                    <input
                      type="text"
                      name="zipcode"
                      value={formData.zipcode}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                  </label>
                  <Link
                    href={{
                      pathname: "/booking/payment",
                      query: formData,
                    }}
                  >
                    <button type="submit" className={styles.nextButton}>
                      Go To Payment
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BuyersInfo;
