import Link from "next/link";
import styles from "../../styles/Bands.module.css";
export const getStaticProps = async () => {
  const res = await fetch("https://positive-pushy-oatmeal.glitch.me/bands");
  const data = await res.json();

  return {
    props: {
      bands: data,
    },
  };
};

const Bands = ({ bands }) => {
  return (
    <div>
      <h1>All Bands</h1>
      {bands.map((band) => (
        <div key={band.id}>
          <a className={styles.single}>
            <h3>{band.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Bands;
