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
  const [selectedNumTents, setSelectedNumTents] = useState(0);
  const [selectedNumTents3, setSelectedNumTents3] = useState(0);
  const [selectedNumTickets, setSelectedNumTickets] = useState(
    initialNumTickets ? parseInt(initialNumTickets) : 1
  );
  const [selectedTicketType, setSelectedTicketType] = useState(
    initialTicketType ?? ""
  );
  const [isRadioSelected, setIsRadioSelected] = useState(false);

  useEffect(() => {
    setIsTentDisabled(selectedNumTickets === 1 || selectedNumTickets === 2);
  }, [selectedNumTickets]);

  const handleNext = () => {
    const destinationPage = `/booking/buyers_info`;

    const queryParams = {
      ticketType: selectedTicketType || "",
      numTickets: selectedNumTickets,
      campsite: router.query.campsite || "",
      numTents: selectedNumTents,
      numTents3: selectedNumTents3,
    };

    // Navigate to the destination page with the query parameters
    router.push({
      pathname: destinationPage,
      query: queryParams,
    });
  };

  useEffect(() => {
    const btnNxt = document.getElementById("btnNxt");
    btnNxt.onclick = function () {
      handleNext();
    };
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
            <Timer seconds={2000} />
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
                  onChange={(e) => {
                    setSelectedTicketType(e.target.value);
                    setIsRadioSelected(true);
                  }}
                />
                Regular Ticket - 799;
              </label>
              <label>
                <input
                  type="radio"
                  name="ticket"
                  value="vip"
                  onChange={(e) => {
                    setSelectedTicketType(e.target.value);
                    setIsRadioSelected(true);
                  }}
                />
                VIP Ticket - 1299;
              </label>

              <h2 className={styles.choosingTent}>Number of Tickets</h2>
              <hr className={styles.hrLine} />
              <select
                className={styles.dropdown}
                value={selectedNumTickets.toString()}
                onChange={(e) =>
                  setSelectedNumTickets(parseInt(e.target.value))
                }
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
                  <select
                    className={styles.dropdown}
                    value={selectedNumTents.toString()}
                    onChange={(e) =>
                      setSelectedNumTents(parseInt(e.target.value))
                    }
                  >
                    {selectedNumTickets === 1 || selectedNumTickets === 2 ? (
                      <>
                        <option value="0">0</option>
                        <option value="1">1</option>
                      </>
                    ) : (
                      <>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <h3 className={styles.choosingTent}>3 Man Tent</h3>
                  <select
                    className={styles.dropdown}
                    disabled={isTentDisabled}
                    value={selectedNumTents3.toString()}
                    onChange={(e) =>
                      setSelectedNumTents3(parseInt(e.target.value))
                    }
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
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

            <button
              className={`${styles.btn} ${
                isRadioSelected ? "" : styles.disabled
              }`}
              onClick={handleNext}
              id="btnNxt"
              disabled={!isRadioSelected}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Selection;
