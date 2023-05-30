import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Booking.module.css";
import Link from "next/link";
import { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation here
    console.log(formData); // Example: Logging form data to the console
  };

  return (
    <div className={styles.bookingContainer}>
      <div className={styles.verticalLine}></div>

      <div className={styles.gridContainer}>
        <section className={styles.home_hero}>
          <div className={styles.rightColumn}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
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
                  type="email"
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
            </form>
          </div>
        </section>
        <section className={styles.home_hero}>
          <div className={styles.rightColumn}>
            <div className={styles.checkboxContainer}>
              {/* Existing code for checkboxes and other elements */}
              <h2 className={styles.h2buyersInfo}>Buyers Info</h2>

              <form onSubmit={handleSubmit} className={styles.formContainer}>
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
                    type="email"
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

                <button type="submit" className={styles.nextButton}>
                  Go To Payment
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BuyersInfo;