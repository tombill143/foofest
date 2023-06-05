import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Foofest | Home</title>
        <meta name="keywords" content="foofest" />
      </Head>

      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nobis,
          asperiores quis, corrupti aut unde officia nihil adipisci nisi dolore
          autem excepturi quisquam rem suscipit ratione a cum qui tempore?
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nobis,
          asperiores quis, corrupti aut unde officia nihil adipisci nisi dolore
          autem excepturi quisquam rem suscipit ratione a cum qui tempore?
        </p>
        <Link className={styles.btn} href="/bands">
          Band Listings
        </Link>
      </div>
    </>
  );
}
