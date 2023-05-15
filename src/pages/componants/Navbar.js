import Link from "next/link";
import Image from "next/image";
import styles from "/src/styles/Home.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/newlogo.svg" className={styles.logocolor} alt="picture" width={128} height={100} />
        {/* <Image src="/logo.png" alt="picture" width={128} height={100} /> */}
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/bands">Band Listings</Link>
    </nav>
  );
};

export default Navbar;
