import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/Booking.module.css";
import Link from "next/link";
import Head from "next/head";
import Timer from "../componants/Timer";

const BuyersInfo = () => {
  const router = useRouter();

  const [buyerInfo, setBuyerInfo] = useState({
    firstName: "",
    lastName: "",
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
      queryParams.append("firstname", buyerInfo.firstName);
      queryParams.append("lastname", buyerInfo.lastName);
      queryParams.append("email", buyerInfo.email);
      queryParams.append("address", buyerInfo.address);
      queryParams.append("zipcode", buyerInfo.zipcode);

      router.push({
        pathname: "/booking/payment",
        search: queryParams.toString(),
      });
    }

    // Add a check for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(buyerInfo.email)) {
      alert("Invalid email address");
      return;
    }
  };

  const handleTicketHolderChange = (index, e) => {
    const updatedTicketHolders = [...ticketHolderInfo];
    updatedTicketHolders[index] = {
      ...updatedTicketHolders[index],
      ticketHolder: e.target.value,
    };
    setTicketHolderInfo(updatedTicketHolders);

    validateForm(); // Trigger form validation when ticket holder fields change
  };

  const validateForm = () => {
    const { firstName, lastName, email, address, zipcode } = buyerInfo;

    let isTicketHoldersValid = true;
    if (ticketHolderInfo.length > 0) {
      isTicketHoldersValid = ticketHolderInfo.every(
        (ticketHolder) =>
          ticketHolder.ticketHolder && ticketHolder.ticketHolder.trim() !== ""
      );
    }

    setIsFormValid(
      firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        email.trim() !== "" &&
        email.includes("@") &&
        email.includes(".") &&
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
                      name="firstName"
                      value={buyerInfo.firstName}
                      onChange={handleChange}
                      className={styles.formInput}
                      onBlur={validateForm}
                    />
                  </label>
                  <label>
                    Last Name:
                    <input
                      type="text"
                      name="lastName"
                      value={buyerInfo.lastName}
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
                        Ticket Holder:
                        <input
                          type="text"
                          name="ticketHolder"
                          value={ticketHolder.ticketHolder}
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
