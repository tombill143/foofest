import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Booking.module.css";

const Selection = () => {
  const router = useRouter();
  const { ticketType, numTickets } = router.query;

  const handleNext = () => {
    // Replace "destination-page" with the actual page where you want to navigate to
    const destinationPage = `/booking/destination-page`;

    // Prepare the query parameters to pass to the destination page
    const queryParams = {
      ticketType: ticketType || "",
      numTickets: numTickets || "",
    };

    // Navigate to the destination page with the query parameters
    router.push({
      pathname: destinationPage,
      query: queryParams,
    });
  };

  return (
    <>
      <Head>
        <title>Select Tickets</title>
        <meta name="keywords" content="foofest" />
      </Head>

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
                <input type="radio" name="ticket" value="regular" />
                Regular Ticket - 799;
              </label>
              <label>
                <input type="radio" name="ticket" value="vip" />
                VIP Ticket - 1299;
              </label>
              <h2 className={styles.choosingTent}>Choose Tents</h2>
              <hr className={styles.hrLine} />
              <select className={styles.dropdown}>
                <option value="tent1">Tent 1</option>
                <option value="tent2">Tent 2</option>
                <option value="tent3">Tent 3</option>
              </select>
              <h2 className={styles.choosingTent}>Optionals</h2>
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
          <button
            className={styles.nextButton}
            onClick={() => {
              router.push({
                pathname: "/booking/selection",
                query: {
                  ticketType: ticketType || "",
                  numTickets: numTickets || "",
                },
              });
            }}
          >
            Next
          </button>
        </section>
      </div>
    </>
  );
};

export default Selection;
