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

{/* midhard */}
      <div>
        <h2>Midgard</h2>
        <h3>Monday</h3>

        {bands.Midgard && bands.Midgard.mon && bands.Midgard.mon.map((band) => (
         <div key={`${band.act}-${band.start}-${band.end}`}>
            {/* dorsnt change anything, still the wrong data at the wrng time stamps */}
            <p>Start: {band.start}</p>
            <p>End: {band.end}</p>
            <p>Act: {band.act}</p>
          </div>
        ))}

       <h3>tuesday</h3>

       {bands.Midgard && bands.Midgard.tue && bands.Midgard.tue.map((band) => (
          <div key={band.act}>
          <p>Start: {band.start}</p>
          <p>End: {band.end}</p>
          <p>Act: {band.act}</p>
         </div>
         ))}

<h3>Wednesday</h3>

{bands.Midgard && bands.Midgard.wed && bands.Midgard.wed.map((band) => (
   <div key={band.act}>
   <p>Start: {band.start}</p>
   <p>End: {band.end}</p>
   <p>Act: {band.act}</p>
  </div>
  ))}



<h3>Thursday</h3>

{bands.Midgard && bands.Midgard.thu && bands.Midgard.thu.map((band) => (
   <div key={band.act}>
   <p>Start: {band.start}</p>
   <p>End: {band.end}</p>
   <p>Act: {band.act}</p>
  </div>
  ))}


<h3>Friday</h3>

{bands.Midgard && bands.Midgard.fri && bands.Midgard.fri.map((band) => (
   <div key={band.act}>
   <p>Start: {band.start}</p>
   <p>End: {band.end}</p>
   <p>Act: {band.act}</p>
  </div>
  ))}


<h3>Saturday</h3>

{bands.Midgard && bands.Midgard.sat && bands.Midgard.sat.map((band) => (
   <div key={band.act}>
   <p>Start: {band.start}</p>
   <p>End: {band.end}</p>
   <p>Act: {band.act}</p>
  </div>
  ))}



<h3>Sunday</h3>

{bands.Midgard && bands.Midgard.sun && bands.Midgard.sun.map((band) => (
   <div key={band.act}>
   <p>Start: {band.start}</p>
   <p>End: {band.end}</p>
   <p>Act: {band.act}</p>
  </div>
  ))}
      </div>





{/* jotunheim */}

      <div>
        <h2>Jotunheim</h2>
        <h3>Monday</h3>
        {bands.Jotunheim && bands.Jotunheim.mon && bands.Jotunheim.mon.map((band) => (
          <div key={band.act}>
            <p>Start: {band.start}</p>
            <p>End: {band.end}</p>
            <p>Act: {band.act}</p>
          </div>
        ))}
      </div>

   {/* vanaheim */}
      <div>
        <h2>Vanaheim</h2>
        {bands.Vanaheim && bands.Vanaheim.mon && bands.Vanaheim.mon.map((band) => (
          <div key={band.act}>
            <p>Start: {band.start}</p>
            <p>End: {band.end}</p>
            <p>Act: {band.act}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BandsSchedule;
