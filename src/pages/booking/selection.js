import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Booking.module.css";
import Timer from "../componants/Timer";
import Head from "next/head";

const Selection = () => {
  const [isTentDisabled, setIsTentDisabled] = useState(true);
  const router = useRouter();
  const { ticketType: initialTicketType, numTickets: initialNumTickets } =
    router.query;

  const [selectedNumTickets, setSelectedNumTickets] = useState(
    initialNumTickets ?? ""
  );

  const [selectedTicketType, setSelectedTicketType] = useState(
    initialTicketType ?? ""
  );

  useEffect(() => {
    const parsedNumTickets = parseInt(selectedNumTickets);
    setIsTentDisabled(parsedNumTickets === 1 || parsedNumTickets === 2);
  }, [selectedNumTickets]);

  const handleNext = () => {
    const destinationPage = `/booking/buyers_info`;

    // Prepare the query parameters to pass to the destination page
    const queryParams = {
      ticketType: selectedTicketType || "",
      numTickets: selectedNumTickets ? parseInt(selectedNumTickets) : 0,
      campsite: router.query.campsite || "",
    };

    // Navigate to the destination page with the query parameters
    router.push({
      pathname: destinationPage,
      query: queryParams,
    });
  };

  useEffect(() => {
    setIsTentDisabled(true);
  }, []);

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
                <input
                  type="radio"
                  name="ticket"
                  value="regular"
                  onChange={(e) => setSelectedTicketType(e.target.value)}
                />
                Regular Ticket - 799;
              </label>
              <label>
                <input
                  type="radio"
                  name="ticket"
                  value="vip"
                  onChange={(e) => setSelectedTicketType(e.target.value)}
                />
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
                    {selectedNumTickets === "1" ||
                    selectedNumTickets === undefined ? (
                      <>
                        <option value="no-tent">0</option>
                        <option value="tent1">1</option>
                      </>
                    ) : (
                      <>
                        <option value="no-tent">0</option>
                        <option value="tent1">1</option>
                        <option value="tent2">2</option>
                        <option value="tent3">3</option>
                        <option value="tent4">4</option>
                        <option value="tent5">5</option>
                      </>
                    )}
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

            <div className={styles.nextButton} onClick={handleNext}>
              Next
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Selection;
