import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Booking.module.css";

const Notfound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be found.</h2>
      <img
        className={styles.girlimage}
        src="/crying-rock-chic.png"
        alt="oops"
      ></img>
      <p>
        Go back to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default Notfound;
