import Head from "next/head";
import Navbar from "./componants/Navbar";
import styles from "../styles/Home.module.css";
import Footer from "./componants/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Foofestival | Home</title>
        <meta name="keywords" content="foofest" />
      </Head>
      <div>
        <section className={styles.home_hero}>
          {/* <img src="foofesthero.png"></img> */}

          <h3>XX DAYS IN JUNE</h3>
          <h1 className={styles.title}>THE ROCK FESTIVAL <br></br> DEEP IN THE FOREST</h1>
        
      

        {/* <Link className={styles.btn} href="/bands">
          Band Listings
        </Link> */}

        <Link className={styles.btn} href="/booking">
          BOOK YOUR TICKETS NOW
        </Link>
        </section>


        <section className={styles.home_program}>
         <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nobis,
          asperiores quis, corrupti aut unde officia nihil adipisci nisi dolore
          autem excepturi quisquam rem suscipit ratione a cum qui tempore?
        </p>

        </section>

       
      </div>
    </>
  );
}
