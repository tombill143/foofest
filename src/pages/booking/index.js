import React from "react";
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
      <h1>available spots</h1>


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
    </div>
  )


}

export default availableSpots;