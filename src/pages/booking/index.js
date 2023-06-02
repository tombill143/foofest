import React from "react";
import styles from "../../styles/Booking.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

const Booking = ({ spots }) => {
  const router = useRouter();
  console.log("spots:", spots);

  const handleCampsiteSelection = (area) => {
    router.push(`/booking/selection?campsite=${area}`);
  };

  return (
    <>
      <Head>
        <title>Select Campsites</title>
        <meta name="keywords" content="foofest" />
      </Head>
      <div className={styles.container_dashboard}>
        <h1>Available spots</h1>
        <p>
          Choose your preferred campsite and number of tickets below. The
          tickets will be reserved for 10 minutes after you are directed to the
          next site from the button below. It is recommended to use a button for
          navigating to the booking page instead of clicking on the camp areas.
        </p>

        <div className={styles.item_container}>
          {spots.map((spot) => (
            <div
              className={`${styles.dashboard_items} ${
                spot.available === 0 ? styles.unavailable : ""
              }`}
              key={spot.area}
              onClick={() =>
                spot.available !== 0 && handleCampsiteSelection(spot.area)
              }
            >
              <div className={styles.single}>
                <h2>{spot.area}</h2>
                <h3>
                  {spot.available} out of {spot.spots} spots available
                </h3>
              </div>
            </div>
          ))}
        </div>
        {/* <div
          className={styles.btn}
          onClick={() => router.push("/booking/selection")}
        >
          Skip this page
        </div> */}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://positive-pushy-oatmeal.glitch.me/available-spots"
  );
  const data = await res.json();

  return {
    props: {
      spots: data,
    },
  };
};

export default Booking;
