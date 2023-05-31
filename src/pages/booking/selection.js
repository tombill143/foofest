import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Booking.module.css";
import Link from "next/link";
import Timer from "../componants/Timer";

const Selection = () => {
  const router = useRouter();
  const { ticketType, numTickets } = router.query;

  const handleNext = () => {
    const destinationPage = `/booking/buyers-info`;

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

  const [isTentDisabled, setIsTentDisabled] = useState(true);
  const [selectedNumTickets, setSelectedNumTickets] = useState("");

  useEffect(() => {
    const parsedNumTickets = parseInt(selectedNumTickets);
    setIsTentDisabled(parsedNumTickets === 1 || parsedNumTickets === 2);
  }, [selectedNumTickets]);

  useEffect(() => {
    const parsedNumTickets = parseInt(numTickets);
    setIsTentDisabled(parsedNumTickets === 1 || parsedNumTickets === 2);
    setSelectedNumTickets(numTickets || "");
  }, [numTickets]);

  useEffect(() => {
    setIsTentDisabled(true); // Disable the 3-man tent dropdown by default
  }, []); // Run only once on component mount

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
            <Timer seconds={10} /> {/* Add the Timer component here */}
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

              <h2 className={styles.choosingTent}>Number of Tickets</h2>
              <hr className={styles.hrLine} />
              <select
                className={styles.dropdown}
                value={selectedNumTickets}
                onChange={(e) => setSelectedNumTickets(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>

              <h2 className={styles.choosingTent}>Choose Tents</h2>
              <hr className={styles.hrLine} />
              <div className={styles.columnContainer}>
                <div>
                  <h3 className={styles.choosingTent}>2 Man Tent</h3>
                  <select className={styles.dropdown}>
                    <option value="no-tent">0</option>
                    <option value="tent1">1</option>
                    <option value="tent2">2</option>
                    <option value="tent3">3</option>
                    <option value="tent4">4</option>
                    <option value="tent5">5</option>
                  </select>
                </div>
                <div>
                  <h3 className={styles.choosingTent}>3 Man Tent</h3>
                  <select className={styles.dropdown} disabled={isTentDisabled}>
                    <option value="no-tent">0</option>
                    <option value="tent1">1</option>
                    <option value="tent2">2</option>
                    <option value="tent3">3</option>
                  </select>
                </div>
              </div>

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

            <Link href="/booking/buyers_info">
              <div className={styles.nextButton}>Next</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Selection;
