import Head from "next/head";
import Navbar from "./bands/componants/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
    </div>
  );
}
