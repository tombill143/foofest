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
    <div className={styles.all_container}>
      <h1>LINEUP</h1>
      <div className={styles.squarecontainer}>

         {bands.map((band) => (
         <Link href={"/bands/" + band.slug} className={styles.single} key={band.slug}>
          <h3>{band.name}</h3>
         </Link>
         ))}
      </div>
    </div>
  );
};

export default Bands;
