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
      <h1>Lineup</h1>
      {bands.map((band) => (
        <Link
          href={"/bands/" + band.slug}
          className={styles.single}
          key={band.slug}
        >
          <h3>{band.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Bands;
