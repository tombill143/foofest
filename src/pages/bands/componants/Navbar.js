import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div class="logo">
        <h1>FOOFEST!!!!</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/bands">Band Listings</Link>
    </nav>
  );
};

export default Navbar;
