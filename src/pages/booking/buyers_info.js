import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Booking.module.css";
import Link from "next/link";
import Head from "next/head";
import Timer from "../componants/Timer";

const BuyersInfo = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipcode: "",
    campsite: "",
    numberOf2ManTents: router.query.numTents || "",
    numberOf3ManTents: router.query.numTents3 || "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      const query = {
        ...formData,
        campsite: router.query.campsite,
      };

      router.push({
        pathname: "/booking/payment",
        query,
      });
    }
  };

  const validateForm = () => {
    const { firstName, lastName, email, address, zipcode } = formData;
    setIsFormValid(
      firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        email.trim() !== "" &&
        address.trim() !== "" &&
        zipcode.trim() !== ""
    );
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
                alt="image of a festival"
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
                      onBlur={validateForm} // Add onBlur event handler to validate the form
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
                      onBlur={validateForm} // Add onBlur event handler to validate the form
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
                      onBlur={validateForm} // Add onBlur event handler to validate the form
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
                      onBlur={validateForm} // Add onBlur event handler to validate the form
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
                      onBlur={validateForm} // Add onBlur event handler to validate the form
                    />
                  </label>
                  <button
                    type="submit"
                    className={styles.btn}
                    disabled={!isFormValid} // Disable the button if the form is not valid
                  >
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
