import React from "react";
import styles from "../../styles/Bands.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://positive-pushy-oatmeal.glitch.me/schedule");
  const data = await res.json();

  return {
    props: {
      bands: data,
    },
  };
};

const BandsSchedule = ({ bands }) => {
  console.log("Bands:", bands);

  return (
    <div>
      <h1>Schedule</h1>
      {bands.mon && bands.mon.map((band, index) => (
        <div>
        <h3 key={index}>{band.act}</h3>

        <h2>Midgard</h2>
        </div>

      ))}
    </div>
  );
};

export default BandsSchedule;
