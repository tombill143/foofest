import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/Booking.module.css";
import Link from "next/link";
import Head from "next/head";
import Timer from "../componants/Timer";

const BuyersInfo = () => {
  const router = useRouter();

  const [buyerInfo, setBuyerInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    zipcode: "",
  });

  const [ticketHolderInfo, setTicketHolderInfo] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    setBuyerInfo({ ...buyerInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      const queryParams = new URLSearchParams();
      queryParams.append("buyerInfo", JSON.stringify(buyerInfo));
      queryParams.append("ticketHolderInfo", JSON.stringify(ticketHolderInfo));

      const { ticketType, numTickets, campsite, numTents, numTents3 } =
        router.query;
      queryParams.append("ticketType", ticketType);
      queryParams.append("numTickets", numTickets);
      queryParams.append("campsite", campsite);
      queryParams.append("numTents", numTents);
      queryParams.append("numTents3", numTents3);

      // Add the additional fields from buyerInfo to the queryParams
      queryParams.append("firstname", buyerInfo.firstname);
      queryParams.append("lastname", buyerInfo.lastname);
      queryParams.append("email", buyerInfo.email);
      queryParams.append("address", buyerInfo.address);
      queryParams.append("zipcode", buyerInfo.zipcode);

      router.push({
        pathname: "/booking/payment",
        search: queryParams.toString(),
      });
    }
  };

  const handleTicketHolderChange = (index, e) => {
    const updatedTicketHolders = [...ticketHolderInfo];
    updatedTicketHolders[index] = {
      ...updatedTicketHolders[index],
      ticketHolderFirst:
        e.target.name === "ticketHolderFirst"
          ? e.target.value
          : updatedTicketHolders[index].ticketHolderFirst,
      ticketHolderLast:
        e.target.name === "ticketHolderLast"
          ? e.target.value
          : updatedTicketHolders[index].ticketHolderLast,
    };
    setTicketHolderInfo(updatedTicketHolders);
    console.log("Updated ticketHolder:", updatedTicketHolders);
    validateForm(); // Trigger form validation when ticket holder fields change
  };

  const validateForm = () => {
    const { firstname, lastname, email, address, zipcode } = buyerInfo;

    let isTicketHoldersValid = true;
    if (ticketHolderInfo.length > 0) {
      isTicketHoldersValid = ticketHolderInfo.every(
        (ticketHolder) =>
          ticketHolder.ticketHolderFirst &&
          ticketHolder.ticketHolderLast &&
          ticketHolder.ticketHolderFirst.trim() !== "" &&
          ticketHolder.ticketHolderLast.trim() !== ""
      );
    }

    setIsFormValid(
      firstname.trim() !== "" &&
        lastname.trim() !== "" &&
        email.trim() !== "" &&
        address.trim() !== "" &&
        zipcode.trim() !== "" &&
        isTicketHoldersValid
    );
  };

  useEffect(() => {
    validateForm();
  }, [buyerInfo]);

  useEffect(() => {
    const { numTickets } = router.query;

    if (numTickets) {
      const numTicketsValue = parseInt(numTickets);

      if (numTicketsValue > 1) {
        const initialTicketHolders = Array(numTicketsValue - 1).fill({});
        setTicketHolderInfo(initialTicketHolders);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Buyers Information</title>
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
                className={styles.festimage}
              />
              <Timer seconds={2000} />
            </div>
          </section>
          <section className={styles.home_hero}>
            <div className={styles.rightColumn}>
              <div className={styles.checkboxContainer}>
                <h2 className={styles.h2buyersInfo}>Buyer's Info</h2>

                <form className={styles.formContainer} onSubmit={handleSubmit}>
                  <label>
                    First Name:
                    <input
                      type="text"
                      name="firstname"
                      value={buyerInfo.firstname}
                      onChange={handleChange}
                      className={styles.formInput}
                      onBlur={validateForm}
                    />
                  </label>
                  <label>
                    Last Name:
                    <input
                      type="text"
                      name="lastname"
                      value={buyerInfo.lastname}
                      onChange={handleChange}
                      className={styles.formInput}
                      onBlur={validateForm}
                    />
                  </label>
                  <label>
                    Address:
                    <input
                      type="text"
                      name="address"
                      value={buyerInfo.address}
                      onChange={handleChange}
                      className={styles.formInput}
                      onBlur={validateForm}
                    />
                  </label>
                  <label>
                    Email:
                    <input
                      type="text"
                      name="email"
                      value={buyerInfo.email}
                      onChange={handleChange}
                      className={styles.formInput}
                      onBlur={validateForm}
                    />
                  </label>
                  <label className={styles.zipcodeLabel}>
                    Zipcode:
                    <input
                      type="text"
                      name="zipcode"
                      value={buyerInfo.zipcode}
                      onChange={handleChange}
                      className={styles.formInput}
                      onBlur={validateForm}
                    />
                  </label>

                  {ticketHolderInfo.map((ticketHolder, index) => (
                    <div key={index} className={styles.buyerInfoContainer}>
                      <h3>Ticket Holder {index + 2}</h3>
                      <label>
                        First Name:
                        <input
                          type="text"
                          name="ticketHolderFirst"
                          value={ticketHolder.ticketHolderFirst || ""}
                          onChange={(e) => handleTicketHolderChange(index, e)}
                          className={styles.formInput}
                          onBlur={validateForm}
                        />
                      </label>
                      <label>
                        Last Name:
                        <input
                          type="text"
                          name="ticketHolderLast"
                          value={ticketHolder.ticketHolderLast || ""}
                          onChange={(e) => handleTicketHolderChange(index, e)}
                          className={styles.formInput}
                          onBlur={validateForm}
                        />
                      </label>
                    </div>
                  ))}

                  <button
                    type="submit"
                    className={styles.btn}
                    disabled={!isFormValid}
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
