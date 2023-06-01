import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Booking.module.css";
import Link from "next/link";
import Head from "next/head";
import Timer from "../componants/Timer"

const BuyersInfo = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipcode: "",
    campsite: "",
    numberOf2ManTents: router.query.numTents || "", // Store numTents data
    numberOf3ManTents: router.query.numTents3 || "", // Store numTents data
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = {
      ...formData,
      campsite: router.query.campsite, // Include the campsite from URL query
    };

    router.push({
      pathname: "/booking/payment",
      query,
    });
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
                  <Timer seconds={2000} />
            </div>
          </section>
          <section className={styles.home_hero}>
            <div className={styles.rightColumn}>
              <div className={styles.checkboxContainer}>
                <h2 className={styles.h2buyersInfo}>Buyers Info</h2>

                <form className={styles.formContainer} onSubmit={handleSubmit}>
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
                  <button type="submit" className={styles.btn}>
                    Go To Payment
                  </button>
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