import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div class="logo">
        <Image src="/logo.png" alt="picture" width={128} height={100} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/bands">Band Listings</Link>
    </nav>
  );
};

export default Navbar;
