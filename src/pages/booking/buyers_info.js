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
    ticketHolder: "",
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

      // Extract the ticket holder names from ticketHolderInfo
      const ticketHolders = ticketHolderInfo
        .map((ticketHolder) => ticketHolder.ticketHolder)
        .join(", ");
      queryParams.append("ticketHolder", ticketHolders);

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

  const validateForm = () => {
    const { firstname, lastname, email, address, zipcode, ticketHolder } =
      buyerInfo;

    const isFormValid =
      firstname.trim() !== "" &&
      lastname.trim() !== "" &&
      email.trim() !== "" &&
      address.trim() !== "" &&
      zipcode.trim() !== "" &&
      ticketHolder.trim() !== "";

    setIsFormValid(isFormValid);
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
                  <div className={styles.buyerInfoContainer}>
                    <h3>Ticket Holder</h3>
                    <label>
                      Name of ticket Holder:
                      <input
                        type="text"
                        name="ticketHolder"
                        value={buyerInfo.ticketHolder}
                        onChange={handleChange}
                        className={styles.formInput}
                        onBlur={validateForm}
                      />
                    </label>
                  </div>

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
