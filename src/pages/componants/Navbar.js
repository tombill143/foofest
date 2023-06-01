import Link from "next/link";
import Image from "next/image";
import styles from "/src/styles/Home.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image
            src="/newlogo.svg"
            className={styles.logocolor}
            alt="picture"
            width={128}
            height={100}
          />
        </Link>
      </div>
      <ul>
        <Link href="/">HOME</Link>
        <Link href="/bands">LINEUP</Link>
        <Link href="/bands/schedule">SCHEDULE</Link>
        <Link href="/about">ABOUT</Link>
        <Link className={styles.btn} href="/booking">
          {" "}
          BOOK
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
