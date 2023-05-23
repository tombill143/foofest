import React from "react";
import styles from "../../styles/Booking.module.css";
import Link from "next/link";

const Selection = () => {
  return (
    <div className={styles.gridContainer}>
      <section className={styles.home_hero}>
        <div className={styles.leftColumn}>
          <img
            src="/selectionimg.JPG"
            alt="Description of the image"
            className={styles.image}
          />
        </div>
      </section>
      <section className={styles.home_hero}>
        <div className={styles.rightColumn}>
          <h1>Choose Ticket Type</h1>
          <div className={styles.checkboxContainer}>
            <label>
              <input type="checkbox" name="regular" value="regular" />
              Regular Ticket - 799;
            </label>
            <label>
              <input type="checkbox" name="vip" value="vip" />
              VIP Ticket - 1299;
            </label>
            <h2 classname={styles.choosingTent}>Choose Tents</h2>
            <hr className={styles.hrLine} />
            <select className={styles.dropdown}>
              <option value="tent1">Tent 1</option>
              <option value="tent2">Tent 2</option>
              <option value="tent3">Tent 3</option>
            </select>
            <h2 classname={styles.choosingTent}>Optionals</h2>
            <hr className={styles.hrLine} />
            <label>
              <input type="checkbox" name="regular" value="regular" />
              Foodstamps
            </label>
            <label>
              <input type="checkbox" name="vip" value="vip" />
              Meet & Greet
            </label>
            <label>
              <input type="checkbox" name="vip" value="vip" />
              Backstage passes
            </label>
          </div>
        </div>
        <button className={styles.nextButton}>Next</button>
      </section>
    </div>
  );
};

export default Selection;
