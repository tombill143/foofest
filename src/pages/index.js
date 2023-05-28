import Head from "next/head";
import Navbar from "./componants/Navbar";
import styles from "../styles/Home.module.css";
import Footer from "./componants/Footer";
import Link from "next/link";
import React, { useRef } from "react";

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
          <h1 className={styles.title}>
            THE ROCK FESTIVAL <br></br> DEEP IN THE FOREST
          </h1>

          {/* <Link className={styles.btn} href="/bands">
          Band Listings
        </Link> */}

          <Link className={styles.btn} href="/booking">
            BOOK YOUR TICKETS NOW
          </Link>
        </section>

        <section className={styles.home_program}>
          <p className={styles.text}>
            Get ready for the ultimate rock experience at Foofest - The Rock
            Festival! Immerse yourself in a deep forest setting as you rock out
            to electrifying performances by renowned bands. With XX days of
            non-stop music, Foofest guarantees an unforgettable experience. Join
            thousands of rock enthusiasts and let the rhythm take over. Don't
            miss out! Secure your spot and buy your tickets now.
          </p>
        </section>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M235.4,86.85A23.55,23.55,0,0,0,212,68H150.59a36,36,0,1,0-45.18,0H44A24,24,0,0,0,34,113.79l.19.09,47.63,21L61.76,211a24,24,0,0,0,12.11,30.74A23.77,23.77,0,0,0,84,244a24,24,0,0,0,21.52-13.29L128,191.91l22.51,38.8A24,24,0,0,0,194.24,211l-20-76.15,47.63-21,.19-.09A23.55,23.55,0,0,0,235.4,86.85ZM128,28a12,12,0,1,1-12,12A12,12,0,0,1,128,28Zm27.16,89a12,12,0,0,0-6.77,14L171.26,218a11.87,11.87,0,0,0,.73,2c-.15-.32-.32-.64-.5-.95L138.38,162a12,12,0,0,0-20.76,0L84.51,219.05c-.18.31-.35.63-.5.95a11.87,11.87,0,0,0,.73-2l22.87-86.92a12,12,0,0,0-6.77-14L44,92H212Z"></path>
            </svg>
          </button>
          <button className={styles.button}>
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M215.38,22.54a12,12,0,0,0-10.29-2.18l-128,32A12,12,0,0,0,68,64V167.35A40,40,0,1,0,92,204V121.37l104-26v40A40,40,0,1,0,220,172V32A12,12,0,0,0,215.38,22.54ZM52,220a16,16,0,1,1,16-16A16,16,0,0,1,52,220ZM92,96.63V73.37l104-26V70.63ZM180,188a16,16,0,1,1,16-16A16,16,0,0,1,180,188Z"></path>
            </svg>
          </button>
          <button className={styles.button}>
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M255,195.13l-64-144A12,12,0,0,0,180,44H76a12,12,0,0,0-10.85,6.9,2.42,2.42,0,0,0-.12.23L65,51.3a.08.08,0,0,0,0,0L1,195.13A12,12,0,0,0,12,212H244a12,12,0,0,0,11-16.87ZM64,112.55V188H30.46ZM88,188V112.55L121.54,188Zm59.8,0L94.47,68H172.2l53.34,120Z"></path>
            </svg>
          </button>
          <button className={styles.button}>
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M216,76H188V48a20,20,0,0,0-20-20H40A20,20,0,0,0,20,48V176a12,12,0,0,0,19.54,9.33l28.46-23V184a20,20,0,0,0,20,20h92.17l36.29,29.33A12,12,0,0,0,236,224V96A20,20,0,0,0,216,76ZM44,150.87V52H164v80H71.58A12,12,0,0,0,64,134.67Zm168,48-20-16.2a12,12,0,0,0-7.54-2.67H92V156h76a20,20,0,0,0,20-20V100h24Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
