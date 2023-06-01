import React from "react";
import styles from "../../styles/Booking.module.css";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const Booking = ({ spots }) => {
  const router = useRouter();
  console.log("spots:", spots);

  const handleSkipPage = () => {
    router.push("/booking/selection");
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
            <div className={styles.dashboard_items} key={spot.area}>
              <Link href={`/booking/${spot.area}`} passHref>
                <div className={styles.single}>
                  <h2>{spot.area}</h2>
                  <h3>
                    {spot.available} out of {spot.spots} spots available
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.btn} onClick={handleSkipPage}>
          Skip this page
        </div>
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
