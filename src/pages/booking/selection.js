import Head from "next/head";
import React, {useState} from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Booking.module.css";
import Timer from "../componants/Timer.js"

const Selection = () => {
  const router = useRouter();
  const {numTickets} = router.query; //delete this router.query?

  const [selectedTicketTypes, setSelectedTicketTypes] = useState([]);
  const [selectedTicketNumber, setSelectedTicketNumber] = useState([]);
//empty array with usestate


//is handleMNext something we need? when we do the params at the bottom of the code anyways
  const handleNext = () => {
    // Replace "destination-page" with the actual page where you want to navigate to
    // const destinationPage = `/booking/buyers_info`??;
    const destinationPage = `/booking/destination-page`;

    // Prepare the query parameters to pass to the destination page
    const queryParams = {
      // ticketType: ticketType || "",
      // numTickets: numTickets || "",
      ticketType: selectedTicketTypes,
      numTickets: selectedTicketNumber,
    };

    // Navigate to the destination page with the query parameters
    router.push({
      pathname: destinationPage,
      query: queryParams,
    });
  };

// _______________________________this constant all from chatgpt
  const handleTicketTypeChange = (e) => {
    //updating the selected ticket type based on which of the ticket checkbox is selected
   //each checkbox will have a handletickettypechange as the onchange event handler
    const ticketType = e.target.value;
    const isSelected = selectedTicketTypes.includes(ticketType);

    // Update selected ticket types based on checkbox selection
    //similar to mmd-case buyerpage
    if (isSelected) {
      setSelectedTicketTypes((prevSelectedTicketTypes) =>
        prevSelectedTicketTypes.filter((type) => type !== ticketType)
      );
    } else {
      setSelectedTicketTypes((prevSelectedTicketTypes) => [
        ...prevSelectedTicketTypes,
        ticketType,
      ]);
    }
  };
  
//the same but for the ticket number. dunno if we could smack those two functuons together
  const handleTicketNumberChange = (e) => {
    const numTickets = e.target.value;
    const isSelected = selectedTicketNumber.includes(numTickets);
    if (isSelected) {
      setSelectedTicketNumber((prevSelectedTicketNumber) =>
        prevSelectedTicketNumber.filter((type) => type !== numTickets)
      );
    } else {
      setSelectedTicketNumber((prevSelectedTicketNumber) => [
        ...prevSelectedTicketNumber,
        numTickets,
      ]);
    }
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
          <Timer seconds={10} />
          </div>
        </section>
        <section className={styles.home_hero}>

          <div className={styles.rightColumn}>
            <h1>Ticket Type & Optionals</h1>
            <div className={styles.checkboxContainer}>
              <label>
                <input type="radio" name="regular" value="regular" onChange={handleTicketTypeChange} />
                {/* <input type="radio" name="ticket" value="regular" /> */}
                Regular Ticket - 799;
              </label>
              <label>
                <input type="radio" name="vip" value="vip" onChange={handleTicketTypeChange}/>
                VIP Ticket - 1299;
              </label>

              <h2 className={styles.choosingTent}>Ticket Amount</h2>
              <hr className={styles.hrLine} />
              <select onChange={handleTicketNumberChange} className={styles.dropdown}>
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
                <input type="checkbox" name="backstage" value="backstage" />
                {/* <input type="checkbox" name="vip" value="vip" /> */}
                Backstage passes
              </label>
            </div>
          </div>
          <button
            // className={styles.nextButton}
            className={styles.btn}
            onClick={() => {
              router.push({
                pathname: "/booking/buyers_info",
                query: {
                  // ticketType: ticketType || "",
                  ticketType: selectedTicketTypes,
                  numTickets: selectedTicketNumber,
                  // numTickets: numTickets || "",
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
