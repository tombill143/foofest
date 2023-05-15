import Head from "next/head";
import Navbar from "./componants/Navbar";
import styles from "../styles/Home.module.css";
import Footer from "./componants/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Foofest | Home</title>
        <meta name="keywords" content="foofest" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nobis, asperiores quis, corrupti aut unde officia nihil adipisci nisi dolore autem excepturi quisquam rem suscipit ratione a cum qui tempore?</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consjnjnjnectetur adipisicing elit. Quia nobis, asperiores quis, corrupti aut unde officia nihil adipisci nisi dolore autem excepturi quisquam rem suscipit ratione a cum qui tempore?</p>
        <Link className={styles.btn} href="/bands">
          Band Listings
        </Link>
      </div>
    </>
  );
}
