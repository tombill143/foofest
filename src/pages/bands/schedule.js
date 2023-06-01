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
    <div className={styles.all_container}>
      <h1>SCHEDULE</h1>

      <div className={styles.day_schedule}>
        <h2>MONDAY</h2>
        <table className={styles.schedule_table}>
          {/* <thead className={styles.thead_schedule}>

       
          <h3>MIDGARD</h3>
          <h3>JOTUNHEIM</h3>
          <h3>VANAHEIM</h3>
        
        </thead> */}

          <tbody className={styles.tbody_schedule}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <h3>MIDGARD</h3>
                {bands.Midgard &&
                  bands.Midgard.mon &&
                  bands.Midgard.mon.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>JOTUNHEIM</h3>

                {bands.Jotunheim &&
                  bands.Jotunheim.mon &&
                  bands.Jotunheim.mon.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>VANAHEIM</h3>

                {bands.Vanaheim &&
                  bands.Vanaheim.mon &&
                  bands.Vanaheim.mon.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.day_schedule}>
        <h2>TUESDAY</h2>
        <table className={styles.schedule_table}>
          <tbody className={styles.tbody_schedule}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <h3>MIDGARD</h3>
                {bands.Midgard &&
                  bands.Midgard.tue &&
                  bands.Midgard.tue.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>JOTUNHEIM</h3>

                {bands.Jotunheim &&
                  bands.Jotunheim.tue &&
                  bands.Jotunheim.tue.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>VANAHEIM</h3>

                {bands.Vanaheim &&
                  bands.Vanaheim.tue &&
                  bands.Vanaheim.tue.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.day_schedule}>
        <h2>WEDNESDAY</h2>
        <table className={styles.schedule_table}>
          <tbody className={styles.tbody_schedule}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <h3>MIDGARD</h3>
                {bands.Midgard &&
                  bands.Midgard.wed &&
                  bands.Midgard.wed.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>JOTUNHEIM</h3>

                {bands.Jotunheim &&
                  bands.Jotunheim.wed &&
                  bands.Jotunheim.wed.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>VANAHEIM</h3>

                {bands.Vanaheim &&
                  bands.Vanaheim.wed &&
                  bands.Vanaheim.wed.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.day_schedule}>
        <h2>THURSDAY</h2>
        <table className={styles.schedule_table}>
          <tbody className={styles.tbody_schedule}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <h3>MIDGARD</h3>
                {bands.Midgard &&
                  bands.Midgard.thu &&
                  bands.Midgard.thu.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>JOTUNHEIM</h3>

                {bands.Jotunheim &&
                  bands.Jotunheim.thu &&
                  bands.Jotunheim.thu.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>VANAHEIM</h3>

                {bands.Vanaheim &&
                  bands.Vanaheim.thu &&
                  bands.Vanaheim.thu.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.day_schedule}>
        <h2>FRIDAY</h2>
        <table className={styles.schedule_table}>
          <tbody className={styles.tbody_schedule}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <h3>MIDGARD</h3>
                {bands.Midgard &&
                  bands.Midgard.fri &&
                  bands.Midgard.fri.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>JOTUNHEIM</h3>

                {bands.Jotunheim &&
                  bands.Jotunheim.fri &&
                  bands.Jotunheim.fri.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>VANAHEIM</h3>

                {bands.Vanaheim &&
                  bands.Vanaheim.fri &&
                  bands.Vanaheim.fri.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.day_schedule}>
        <h2>SATURDAY</h2>
        <table className={styles.schedule_table}>
          <tbody className={styles.tbody_schedule}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <h3>MIDGARD</h3>
                {bands.Midgard &&
                  bands.Midgard.sat &&
                  bands.Midgard.sat.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>JOTUNHEIM</h3>

                {bands.Jotunheim &&
                  bands.Jotunheim.sat &&
                  bands.Jotunheim.sat.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>VANAHEIM</h3>

                {bands.Vanaheim &&
                  bands.Vanaheim.sat &&
                  bands.Vanaheim.sat.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.day_schedule}>
        <h2>SUNDAY</h2>
        <table className={styles.schedule_table}>
          <tbody className={styles.tbody_schedule}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <h3>MIDGARD</h3>
                {bands.Midgard &&
                  bands.Midgard.sun &&
                  bands.Midgard.sun.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>JOTUNHEIM</h3>

                {bands.Jotunheim &&
                  bands.Jotunheim.sun &&
                  bands.Jotunheim.sun.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>VANAHEIM</h3>

                {bands.Vanaheim &&
                  bands.Vanaheim.sun &&
                  bands.Vanaheim.sun.map((band) => (
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BandsSchedule;
