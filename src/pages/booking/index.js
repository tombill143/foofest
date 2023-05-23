import React, { useRef } from 'react';
import styles from "../../styles/Booking.module.css";
import Link from "next/link";

//we should remove the nav and headerstuff here, so it looks like it's own domaine, i think

export const getStaticProps = async () => {
  const res = await fetch("https://positive-pushy-oatmeal.glitch.me/available-spots");
  const data = await res.json();

  return {
    props: {
      spots: data,
    },
  };
};


const availableSpots = ({spots}) => {
  console.log("spots:", spots);

  return (
    <div className={styles.container_dashboard}>
      <h1>Available spots</h1>
      <p>Choose your preferred camp site and number of tickets below. The tickets will be reserved for 10 minutes after you are directed to the next site from the button below. MAKR BUTTON BELOW THE CHOICES TO GO TO BOOKING. SO NOT ONLY CLICKING ON THE CAMP AREAS i think that's best</p>


      <div className={styles.item_container}>

        {spots.map((spot) => (
        
          <div className={styles.dashboard_items}> 
            <Link href={"/booking/" + spot.area} className={styles.single} key={spot.area}>
            <h2>{spot.area}</h2>
            <h3> {spot.available} out of {spot.spots} spots available</h3>
          
            {/* do some 'if spot.abailable = 0 then 'sold out!' later. for muspelheim */}
            </Link>

            

           </div>
        ))}

      </div>
      <Link className={styles.btn} href="/selection">
          Go to Reservation
        </Link>
    </div>
  )


}

export default availableSpots;